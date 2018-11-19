'use strict';

console.log('Hello from external Javascript');
alert('Welcome to my Website!');
var x = prompt('What is your favorite color?');
alert(x + ' is my favorite color too!');

var little_mermaid_days = 3;
var brother_bear_days = 5;
var hercules_days = 1;
var cost_per_day = 3;
var little_mermaid_cost = (cost_per_day*little_mermaid_days);
var brother_bear_cost = (brother_bear_days*cost_per_day);
var hercules_cost = (cost_per_day*hercules_days);
var total_cost = (hercules_cost + little_mermaid_cost + brother_bear_cost);

console.log(total_cost);

var google_pay = 400;
var amazon_pay = 380;
var facebook_pay = 350;
var google_hours = 6;
var amazon_hours = 4;
var facebook_hours = 10;
var total_week_earning = google_hours*google_pay + amazon_hours*amazon_pay + facebook_hours*facebook_pay;

console.log(total_week_earning);

var student_enrollment = full_class && schedule_conflict;
var full_class = true;
var schedule_conflict = true;

console.log(student_enrollment);