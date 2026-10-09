# Internship Agent — AI Career Prep Copilot

A beginner-friendly agentic AI project that helps students turn an internship listing into an actionable preparation plan. It uses an LLM as a reasoning step and local Python tools to inspect a job description, compare required skills against a user-provided profile, and produce a checklist and interview practice plan.

> **Human-in-the-loop:** this tool never submits applications, contacts recruiters, or invents qualifications. Review every suggestion and keep all claims truthful.

## Features
- Reads a job description from a local text file
- Extracts role, core skills, and likely interview topics with an LLM
- Calls local tools to compare skills and build a preparation checklist
- Produces a Markdown report for review
- Keeps your personal profile in a local JSON file that is not committed by default

## Quick start
1. Install Python 3.10 or newer.
2. Create and activate a virtual environment.
3. Install dependencies: `pip install -r requirements.txt`
4. Copy `.env.example` to `.env` and add your API key.
5. Edit `profile.example.json` with truthful skills and projects, then save as `profile.json`.
6. Put a job description in `sample_job.txt` or your own `.txt` file.
7. Run: `python agent.py sample_job.txt`

## Example output
The report includes a role summary, skill match, learning gaps, project ideas, a preparation checklist, and practice interview questions.

## Architecture
1. **Input:** job description + user-controlled profile.
2. **Reasoning:** model extracts requirements and proposes next actions.
3. **Tools:** Python functions calculate skill overlap and create a checklist.
4. **Review:** a Markdown report is saved locally for the student to inspect.

This is a learning prototype, not a guarantee of internship selection. It uses a model API, which may incur costs. Never put API keys, private contact details, or confidential job data in GitHub.

## Next improvements
- Add tests and structured output validation
- Add a simple Streamlit UI
- Add source-linked company research with explicit citations
- Track application status locally with user consent

## License
MIT
