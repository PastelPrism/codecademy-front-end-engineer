# 1. Print working directory
pwd

# 2. List all files and directories
ls

# 3. Change directory to national/politics
cd national/politics/

# 4. List files in politics/ directory
ls

# 5. Create elections/ directory
mkdir elections

# 6. Change into elections
cd elections

# 7. Create two files
touch candidates.txt issues.txt

# 8. Go three levels up to daily-buzz and print
cd ../../../daily-buzz/
pwd

# 9. Create business/ and enter it
mkdir business 
cd business

# 10. List contents of business
ls

# 11. Create startups/ and enter it
mkdir startups 
cd startups

# 12. Go back to business, create disruptors inside startups
cd .. 
mkdir -p startups/disruptors

# 13. Create three files inside disruptors
touch startups/disruptors/tech.txt startups/disruptors/design.txt startups/disruptors/education.txt

# Go up one level and print working directory
cd .. 
pwd
