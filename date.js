function findDate(string) {
  var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
  var match = dateTime.exec(string);
  return new Date(Number(match[3]),
                  Number(match[1]) - 1,
                  Number(match[2]));
                  //this change allows you to ente the date the "american way" and have it printed out
}
print(findDate("1-30-2003"));
