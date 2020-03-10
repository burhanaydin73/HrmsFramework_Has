$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddEmployee.feature");
formatter.feature({
  "name": "Add Employee",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addEmployee"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i navigated to Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_PIM_and_Add_Employee_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Employee To HRMS",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addEmployee"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "i add firstName, middleName and last name",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_add_firstName_middleName_and_last_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click Create Login Details",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_Create_Login_Details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter username-password-confirm password",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_enter_username_password_confirm_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click Save button",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i will see Personal Details",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_will_see_Personal_Details()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#empPic\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-79BVRKRR\u0027, ip: \u002710.0.0.209\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\burha\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56578}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a4beedb665da5c19f6bf400effda11df\n*** Element info: {Using\u003did, value\u003dempPic}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\r\n\tat com.hrms.steps.AddEmployeeSteps.i_will_see_Personal_Details(AddEmployeeSteps.java:62)\r\n\tat ✽.i will see Personal Details(file:src/test/resources/features/AddEmployee.feature:14)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i navigated to Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_PIM_and_Add_Employee_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add New Employee To HRMS",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addEmployee"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "i add \"John\", \"S\" and \"Smith\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_add_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click Save button",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i will see Personal Details",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_will_see_Personal_Details()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i navigated to Add Employee Page",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_PIM_and_Add_Employee_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add new Employee and Edit Details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint2"
    },
    {
      "name": "@addEmployee"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "i enter user info and edit Personal details I see Successfully Saved",
  "rows": [
    {
      "cells": [
        "FirstName",
        "MiddleName",
        "LastName",
        "DLNum",
        "LicExpYear",
        "LicExpMonth",
        "LicExpDay",
        "SSNNumber",
        "Gender",
        "MaritalStatus",
        "Nationality",
        "DoB"
      ]
    },
    {
      "cells": [
        "Michael",
        "Mors",
        "OneLee",
        "TX123456",
        "2022",
        "Dec",
        "27",
        "123-456-4578",
        "Male",
        "Married",
        "Turkish",
        "1981-01-21"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_enter_user_info_and_edit_Personal_details_I_see_Successfully_Saved(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#personal_txtNICNo\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-79BVRKRR\u0027, ip: \u002710.0.0.209\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\burha\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56647}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: faf2677543b9b06cadfffcdd673dc4a8\n*** Element info: {Using\u003did, value\u003dpersonal_txtNICNo}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.clear(Unknown Source)\r\n\tat com.hrms.utils.CommonMethods.sendText(CommonMethods.java:154)\r\n\tat com.hrms.steps.AddEmployeeSteps.i_enter_user_info_and_edit_Personal_details_I_see_Successfully_Saved(AddEmployeeSteps.java:129)\r\n\tat ✽.i enter user info and edit Personal details I see Successfully Saved(file:src/test/resources/features/AddEmployee.feature:49)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sprint1"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "Valid Login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sprint1"
    },
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i enter valid username and valid password",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_enter_valid_username_and_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps._click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i see welcome text",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_see_welcome_text()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Invalid Login and message validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I enter \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "i click login button",
  "keyword": "And "
});
formatter.step({
  "name": "I see \"\u003cErrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "ErrorMessage"
      ]
    },
    {
      "cells": [
        "Admin",
        "Admin123",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "Syntax@123",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Invalid Login and message validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint1"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Admin\" and \"Admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps._click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid Login and message validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint1"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Admin\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps._click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see \"Password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid Login and message validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint1"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"\" and \"Syntax@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps._click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid Login and message validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sprint1"
    },
    {
      "name": "@login"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps._click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see \"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_see(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Report.feature");
formatter.feature({
  "name": "Report",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@report"
    }
  ]
});
formatter.scenarioOutline({
  "name": "",
  "description": "    : Search for invalid report",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "i enter an invalid \"\u003creportName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "i click search button",
  "keyword": "And "
});
formatter.step({
  "name": "i see No Record Found message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "reportName"
      ]
    },
    {
      "cells": [
        "Kobe Bryant"
      ]
    },
    {
      "cells": [
        "LeBron James"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i navigated to the Reports Page",
  "keyword": "And "
});
formatter.match({
  "location": "ReportSteps.i_navigated_to_the_Reports_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    : Search for invalid report",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@report"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "i enter an invalid \"Kobe Bryant\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReportSteps.i_enter_an_invalid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click search button",
  "keyword": "And "
});
formatter.match({
  "location": "ReportSteps.i_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i see No Record Found message",
  "keyword": "Then "
});
formatter.match({
  "location": "ReportSteps.i_see_No_Record_Found_message()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i navigated to the Reports Page",
  "keyword": "And "
});
formatter.match({
  "location": "ReportSteps.i_navigated_to_the_Reports_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    : Search for invalid report",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@report"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "i enter an invalid \"LeBron James\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReportSteps.i_enter_an_invalid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click search button",
  "keyword": "And "
});
formatter.match({
  "location": "ReportSteps.i_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i see No Record Found message",
  "keyword": "Then "
});
formatter.match({
  "location": "ReportSteps.i_see_No_Record_Found_message()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search for valid report",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "i enter an valid  \"\u003creportName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "i click search button",
  "keyword": "And "
});
formatter.step({
  "name": "i see the \"\u003creportName\u003e\" report displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "reportName"
      ]
    },
    {
      "cells": [
        "Sample Report"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "i am logged into HRMS",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_am_logged_into_HRMS()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i navigated to the Reports Page",
  "keyword": "And "
});
formatter.match({
  "location": "ReportSteps.i_navigated_to_the_Reports_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for valid report",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@report"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "i enter an valid  \"Sample Report\"",
  "keyword": "When "
});
formatter.match({
  "location": "ReportSteps.i_enter_an_valid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click search button",
  "keyword": "And "
});
formatter.match({
  "location": "ReportSteps.i_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i see the \"Sample Report\" report displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ReportSteps.i_see_the_report_displayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png", null);
formatter.after({
  "status": "passed"
});
});