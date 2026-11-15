---
name: implement-issue
description: Implements a GitHub issue using the complete project development workflow from requirement analysis through Pull Request creation.
disable-model-invocation: true
---
# Implement GitHub Issue
You are responsible for implementing a GitHub issue using
the project's standard engineering workflow.
The issue number is provided by the user.
Follow every phase below in order.
Do not skip validation steps.

# PHASE 1 — READ ISSUE
Use GitHub MCP.
Read the requested GitHub issue.
Extract:- issue number- title- business requirement- acceptance criteria- constraints- relevant comments
If the issue is unclear or missing critical information,
report the ambiguity before implementation.
Do not modify code yet.
# PHASE 2 — UNDERSTAND CURRENT PROJECT
Review:- CLAUDE.md- applicable project rules- existing implementation- relevant source files
Identify:- files likely to change- existing functions that can be reused- regression risks
Avoid unrelated exploration.
# PHASE 3 — CREATE FEATURE BRANCH
Inspect the current Git state.
Make sure the working tree does not contain unrelated
uncommitted changes that could accidentally enter this work.
Create a new branch according to:
.claude/rules/git.md
Derive the branch name from:- issue type- issue number- short issue description
Never implement feature work directly on main.
# PHASE 4 — IMPLEMENT
Implement only the GitHub issue requirements.
Follow:- CLAUDE.md- frontend rules- security rules- testing rules- Git rules
Requirements:- preserve existing functionality- avoid unnecessary dependencies- avoid unrelated refactoring- keep changes minimal- reuse existing code where appropriate
# PHASE 5 — AUTOMATIC VALIDATION
Allow configured project Hooks to run.
If any Hook reports failure:
1. investigate the problem
2. correct the implementation
3. rerun validation
Do not continue while mandatory validation is failing.
# PHASE 6 — SPECIALIST AGENT REVIEW
Delegate independent reviews.
Use:
security-agent
for:- frontend security risks- unsafe DOM usage- input handling- secrets- sensitive data exposure- security regressions
Use:
test-reviewer
for:- positive test scenarios- negative scenarios- edge cases- regression risks- acceptance-criteria coverage
Where appropriate, run these investigations in parallel.
Subagents must not modify files during review.
# PHASE 7 — PROCESS REVIEW FINDINGS
Collect findings from both agents.
Classify them:- Critical- High- Medium- Low
Critical or High findings that relate to the current change
must be resolved before continuing.
After fixes, rerun:- project validation- relevant specialist review
# PHASE 8 — BROWSER VALIDATION
Use Playwright MCP.
Open the locally running application.
Validate each acceptance criterion from the GitHub issue.
Also verify important existing functionality still works.
Produce:
Acceptance Criterion → PASS / FAIL
If any required criterion fails:
1. investigate
2. fix code
3. rerun Hooks
4. rerun relevant tests
Do not continue until required validation passes.
# PHASE 9 — REVIEW GIT DIFF
Inspect:- git status- git diff- files changed
Verify:- only issue-related files changed- no secrets were added- no unrelated modifications exist- acceptance criteria are implemented
Remove accidental or unrelated changes before committing.
# PHASE 10 — COMMIT
Create a concise Conventional Commit message
according to the Git rules.
Stage only files required for this issue.
Create the commit.
Do not include unrelated files.
# PHASE 11 — PUSH
Push the current feature branch to GitHub.
Configure upstream tracking if required.
Verify the remote branch exists.
# PHASE 12 — CREATE PULL REQUEST
Use GitHub MCP.
Create a Pull Request into main.
Use the issue requirement as the source of truth.
The Pull Request must contain:
## Summary
Brief description of the implementation.
## Requirement
Summarize the GitHub issue.
## Changes Made
List important implementation changes.
## Validation
List validations performed.
## Security Review
Summarize security-agent findings.
## Functional Testing
Summarize test-reviewer findings.
## Browser Testing
Summarize Playwright MCP results.
## Risks
Describe known risks or say "No known risks".
## Related Issue
Reference the GitHub issue using:
Closes #<issue-number>
# PHASE 13 — FINAL REPORT
Return:- Issue number- Branch name- Files changed- Commit hash- Validation result- Security review result- Testing result- Pull Request number- Pull Request URL
Do not merge the Pull Request.
The final merge decision belongs to the human reviewer