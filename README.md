# async-javascript
Exercise 5 from Kyle Simpson's Advanced Javascript course

# Solution
I added my own more succinct alternative solution using async/await (which did not exist when Kyle wrote the course in 2015). My solutions deals with any number of files (not just 3). This solution is in ex5-async-await.js.

Run it with the command: `node ex5-promise-async-await`.

# Original instructions

1. This exercise calls for you to write some async flow-control code to more properly handle the provided callback mess as shown in "ex5.js".

2. Expected behavior:
	- Request all 3 files at the same time (in "parallel").
	- Render them ASAP (don't just blindly wait for all to finish loading)
	- BUT, render them in proper (obvious) order: "file1", "file2", "file3".
	- After all 3 are done, output "Complete!".

3. Use either native promises, the *asynquence* lib (provided), or your own favorite async/promises library/utility.

