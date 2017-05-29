function checkValid() {
  return "aBhY3j7Yot";
};

function loadJson() {
  var json = {
    "options": [
      {
        "option": "3",
        "option_body": [
          "",
          ":ProductName: Red Hat Mobile Application Platform Hosted",
          ":ProductShortName: RHMAP",
          ":ProductRelease: 3",
          ":ProductVersion: 3.16",
          ""
        ]
      },
      {
        "option": "44",
        "option_body": [
          "",
          ":ProductName: Red Hat Mobile Application Platform",
          ":ProductShortName: RHMAP",
          ":ProductRelease: 4.4",
          ":ProductVersion: 4.4",
          ""
        ]
      }
    ]
  };
  return json;
};
function loadAttr_choice() {
  var attr_choice =
    '+++'+
    '<form action="?" method="get">'+
    '<p><select name="attr">'+
    '  <option value="">None</option>'+
    '  <option value="3">Hosted</option>'+
    '  <option value="44">4.4</option>'+
    '</select>'+
    '<p>  <input type="submit" value="Submit">'+
    '</form> '+
    '+++'
  ;
  return attr_choice;
};
checkValid();