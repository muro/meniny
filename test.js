function UnitTest() {
    var success = UnitTest_MeninyAndSviatky();
    if(!success) {
	alert('Meniny failed');
    }
    success &= UnitTest_DateHelpers();
    
    if(!success) {
	alert('Tests failed! The widget doesn\' work!');
    }
}

function test_getFullYearNumber() {
    var success = true;
    success &= 2000 == getFullYearNumber(new Date(2000, 2, 1));
    success &= 2001 == getFullYearNumber(new Date(2001, 11, 10));
    success &= 2006 == getFullYearNumber(new Date(2006, 2, 1));
    success &= 1998 == getFullYearNumber(new Date(1998, 2, 1))
    return success;
}

function test_isLeapYear() {
    var success = true;
    success &= isLeapYear(new Date(1992, 11, 16));
    success &= !isLeapYear(new Date(1900, 1, 1));
    success &= isLeapYear(new Date(2000, 1, 2));
    success &= !isLeapYear(new Date(2001, 1, 6));
    success &= isLeapYear(new Date(2004, 1, 2));
    success &= isLeapYear(new Date(2008, 1, 2));
    return success;
}

function test_getDayWithinYear() {
    var success = true;
    success &= 1 == getDayWithinYear(new Date(2001, 0, 1));
    success &= 32 == getDayWithinYear(new Date(2001, 1, 1));
    success &= 59 == getDayWithinYear(new Date(2001, 1, 28));
    success &= 60 == getDayWithinYear(new Date(2001, 2, 1));
    success &= 60 == getDayWithinYear(new Date(2000, 1, 29));
    success &= 61 == getDayWithinYear(new Date(2000, 2, 1));
    success &= 365 == getDayWithinYear(new Date(2005, 11, 31));
    success &= 366 == getDayWithinYear(new Date(2008, 11, 31));
    return success;
}
function test_dayDifferenceWithinYear() {
    return true;
}

function UnitTest_DateHelpers() {
    var success = true;

    if (!test_getFullYearNumber()) {
	alert('year resolving failed!');    }

    if (!test_isLeapYear()) {
	alert('leap year test failed!');
    }

    if (!test_getDayWithinYear()) {
	alert('getDayWithinYear test failed!');
    }

    if (!test_dayDifferenceWithinYear()) {
	alert('getDayWithinYear test failed!');
    }

    return success;
}



function UnitTest_MeninyAndSviatky() {
    var success = true;
    var testerSK = new MeninyAndSviatkyProvider('sk', DataSk());
    // test meniny;
    success &= 'Peter, Pavol' == testerSK.getMeniny(new Date(2000, 5, 29));
    success &= 'Peter, Pavol' != testerSK.getMeniny(new Date(2000, 3, 29));
    success &= 'Barbora, Barbara' == testerSK.getMeniny(new Date(2004, 11, 4));
    success &= 'Barbora, Barbara' != testerSK.getMeniny(new Date(2004, 11, 3));
    success &= 'Barbora, Barbara' != testerSK.getMeniny(new Date(2004, 11, 5));
    success &= 'Radana, Radan' != testerSK.getMeniny(new Date(2004, 11, 15));
    success &- '' == testerSK.getMeniny(new Date(2000, 0, 1));
    // test sviatky:
    success &= 'Deň vzniku Slovenskej republiky' == testerSK.getSviatok(new Date(1993, 0, 1));
    success &= 'Sedembolestná Panna Mária' == testerSK.getSviatok(new Date(2000, 8, 15));
    // test pohyblive sviatky:
    success &= "Veľkonočná nedeľa" == testerSK.getSviatok(new Date(2005, 2, 27));
    success &= "Veľkonočná nedeľa" == testerSK.getSviatok(new Date(2004, 3, 11));
    success &= "Veľkonočná nedeľa" == testerSK.getSviatok(new Date(2006, 3, 16));

    var testerCZ = new MeninyAndSviatkyProvider('cz');
    success &= 'Radana, Radan' == testerCZ.getMeniny(new Date(2004, 11, 15));
    success &= 'Radmila' == testerCZ.getMeniny(new Date(2004, 0, 3));
    success &- '' == testerCZ.getMeniny(new Date(1989, 10, 17));
    success &- '?' != testerCZ.getSviatok(new Date(1989, 10, 17));

    success &= 'Den osvobození od fašismu (1945)' == testerCZ.getSviatok(new Date(1993, 4, 8));
    success &= 'Den české státnosti' == testerCZ.getSviatok(new Date(2000, 8, 28));
    // test pohyblive sviatky:
    success &= "Pondělí velikonoční" == testerCZ.getSviatok(new Date(2007, 3, 9));

    if (!success) {
	alert('meniny tester failed!');
	document.getElementById('meninyCz').innerHTML = 'Error';
    }
    return success;
}
