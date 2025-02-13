# MongoDB $inc operator error with String Field

This repository demonstrates a common error in MongoDB update operations when using the `$inc` operator with a string field.  The `$inc` operator is designed to increment numeric values; attempting to use it with a string field will result in an error.

The `bug.js` file contains the erroneous code that demonstrates the issue. The `bugSolution.js` file provides the corrected code that addresses the problem.