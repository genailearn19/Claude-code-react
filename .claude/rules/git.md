# Git Development Rules
## Branch Naming
Always create feature branches using the GitHub issue number.
Feature:
feature/<issue-number>-<short-description>
Bug Fix:
bugfix/<issue-number>-<short-description>
Hotfix:
hotfix/<issue-number>-<short-description>
Examples:
feature/27-saved-jobs
feature/108-job-alerts
bugfix/42-search-filter
hotfix/901-login-failure
## Branch Rules- Never implement feature work directly on main.- Create a dedicated branch for every GitHub issue.- Keep branch names lowercase.- Use hyphens between words.- Keep the description short and meaningful.
## Commit Rules
Use Conventional Commit style.
Examples:
feat: add saved jobs functionality
fix: correct job search filtering
refactor: simplify filter handling
## Pull Request Rules
Every Pull Request must:- Reference the GitHub issue.- Explain what changed.- Include validation performed.- Include security review results.- Include testing results.- Mention known risks.- Never automatically merge the PR.