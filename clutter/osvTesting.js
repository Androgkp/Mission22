const cvss = require('@neuralegion/cvss');

// console.log(cvss.calculateBaseScore('CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:N/A:N'));
console.log(cvss.calculateBaseScore(process.argv[2]));