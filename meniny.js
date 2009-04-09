// date functions, helper functions that work with Date objects
function getFullYearNumber(date) {
    return 1900 + date.getYear();
}

function isLeapYear(date) {
    var year = getFullYearNumber(date);
    return (year % 4 ==0) && ((year % 100 != 0) || (year % 400 == 0));
}

function getDayWithinYear(date) {
    var month = date.getMonth();

    var starting_day_in_month = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ];
    leap_year_extra = (month >= 2 && isLeapYear(date)) ? 1 : 0;
    return date.getDate() + starting_day_in_month[month] + leap_year_extra;
}

function dayDifferenceWithinYear(date1, date2) {
    return getDayWithinYear(date2) - getDayWithinYear(date1);
}



var easterDates = [
    [ 2004, 4, 11 ], [ 2005, 3, 27 ], [ 2006, 4, 16 ], [ 2007, 4, 8], [ 2008, 3, 23 ],
    [ 2009, 4, 12 ], [ 2010, 4, 4 ], [ 2011, 4, 24 ], [ 2012, 4, 8 ], [ 2013, 3, 31 ],
    [ 2014, 4, 20 ], [ 2015, 4, 5 ], [ 2016, 3, 27 ],
];

function getEasterDayImpl(date) {
    // find this years base date:
    var baseDate = 0;
    for (i = 0; i < easterDates.length; ++i) {
	if (easterDates[i][0] == getFullYearNumber(date)) {
	    baseDate = new Date(easterDates[i][0], easterDates[i][1] - 1, easterDates[i][2]);
	    break;
	}
    }
    if (0 == baseDate) // no sense continuing - no base date found
	return "";
    var dateDiff = dayDifferenceWithinYear(baseDate, date);

    // try to find an entry with this dateDiff:
    for (i = 0; i < this.easter.length; ++i) {
	if (dateDiff == this.easter[i][0])
	    return this.easter[i][1];
    }
    return "";
}

function MeninyAndSviatkyProvider(countryCode) {
    this.getEasterDay = getEasterDayImpl;

    // initialize member variables:
    var data = ('cz' == countryCode ? DataCz() : DataSk());
    this.meniny = data.meniny;
    this.sviatky = data.sviatky;
    this.easter = data.easter;

    this.getMeniny = function (date) {
	return this.meniny[date.getMonth()][date.getDate() - 1];
    };

    this.getSviatok = function (date) {
	var sviatok = this.getStatnySviatok(date);
	if ("" == sviatok)
	    sviatok = this.getEasterDay(date);
	return sviatok;
    }

    this.getStatnySviatok = function (date) {
	for (i = 0; i < this.sviatky.length; ++i) {
	    if (this.sviatky[i][0] == date.getDate() &&
		this.sviatky[i][1] == date.getMonth() + 1)
		return this.sviatky[i][2];
	}
	return "";
    }

    return this;
}

// output functions:

function writeNameNewSk(date, element) {
    var meninyProvider =
	new MeninyAndSviatkyProvider('sk');
    element.innerHTML = meninyProvider.getMeniny(date);
    element.setAttribute("class", "meniny " +
			((element.innerHTML.length>=30) ? "meninySmall":"meninyLarge"));
}

function writeMeninySingle(date, country) {
    var meniny = document.getElementById('meniny_' + country);
    if (country == 'sk') {
	writeNameNewSk(date, meniny);
    } else {
    var meninyProvider =
	new MeninyAndSviatkyProvider(country);
    meniny.innerHTML = meninyProvider.getMeniny(date);
    meniny.setAttribute("class", "meniny " +
			((meniny.innerHTML.length>=10) ? "meninySmall":"meninyLarge"));
    }
}

function writeSviatokSingle(date, country) {
    var sviatok = document.getElementById('sviatok_' + country);

    var meninyProvider = new MeninyAndSviatkyProvider(country)
    sviatok.innerHTML = meninyProvider.getSviatok(date);
    sviatok.setAttribute("class", "sviatok " +
			 (sviatok.innerHTML.length>=30) ? "sviatokSmall":"sviatokLarge");
}

function writeMeniny(date) {
    writeMeninySingle(date, 'cz');
    writeMeninySingle(date, 'sk');
}

function writeSviatok(date) {
    writeSviatokSingle(date, 'cz');
    writeSviatokSingle(date, 'sk');
}

function writeDateNew(date, element) {
    element.innerHTML = date.getDate();
    element.setAttribute("class", "datum")
// +  ((date.getDate()>=20) ? "datumLarge":"datumSmall"));    
}

function writeDateSingle(date, country) {
    var datum = document.getElementById('datum_' + country);
    writeDateNew(date, datum);
}

function writeDate(date) {
    writeDateSingle(date, 'cz');
    writeDateSingle(date, 'sk');
}

function show(country) {
    writeDateSingle(new Date, country);
    writeMeninySingle(new Date, country);
    writeSviatokSingle(new Date, country);
}

function onshow() {
    writeDate(new Date);
    writeMeniny(new Date);
    writeSviatok(new Date);
}

function createWeek(parent_id) {
    var parent = document.getElementById(parent_id);
    var moving_day = new Date();
    for (i = 0; i < 7; ++i) {
	var widget = document.createElement('div');
	widget.setAttribute("class", "widget " +
			    (moving_day.getDay() == 0 ? "sunday" : "weekday"));
	parent.appendChild(widget);

	var datum = document.createElement('div');
	var name = document.createElement('span');

	writeDateNew(moving_day, datum);
	writeNameNewSk(moving_day, name);

	widget.appendChild(datum);
	widget.appendChild(name);

	moving_day.setDate(moving_day.getDate() + 1);
    }
}

function fillDay(day_element, date) {
    day_element.setAttribute("class", "widget " +
			     (date.getDay() == 0 ? "sunday" : "weekday"));
    var children = day_element.childNodes;
    for (j = 0; j < children.length; ++j) {
	var child = children.item(j);
	if (child.className == 'datum')
	    writeDateNew(date, child);
	if (child.className == 'meniny')
	    writeNameNewSk(date, child);
    }
}

function createDayPre(parent_id) {
    var widget = document.getElementById('day_pre');
    fillDay(widget, new Date());
}

function createWeekPre(parent_id) {
    var moving_day = new Date();
    moving_day.setDate(moving_day.getDate());

    for (i = 0; i < 7; ++i) {
	var widget = document.getElementById('day_' + i)
	fillDay(widget, moving_day);
	moving_day.setDate(moving_day.getDate() + 1);
    }
}