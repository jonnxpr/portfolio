from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DAG_HINT = '- For non-trivial tasks, instantiate the `Template DAG 100% compliance` from `orchestrate-multi-agents`; owners/tasks may be reduced only when not applicable, but mandatory gates cannot be removed.'
IGNORE_PARTS = {'.git', '.history', 'node_modules', 'bin', 'build', 'dist', 'target', '.gradle', '.idea', '.vscode', '.venv', 'venv'}
IGNORE_FILES = {'compliance-report.md', 'precedence-report.md'}


def is_ignored(path: Path) -> bool:
    lowered_parts = {part.lower() for part in path.parts}
    if lowered_parts & IGNORE_PARTS:
        return True
    return path.name.lower() in IGNORE_FILES


for path in ROOT.rglob('*.md'):
    if is_ignored(path):
        continue

    try:
        text = path.read_text(encoding='utf-8')
    except Exception:
        continue

    header = '## Mandatory multi-agent orchestration skill'
    if header not in text or DAG_HINT in text:
        continue

    start = text.find(header)
    end = text.find('\n## ', start + 1)
    if end == -1:
        block = text[start:].rstrip() + '\n' + DAG_HINT + '\n'
        updated = text[:start] + block
    else:
        block = text[start:end].rstrip() + '\n' + DAG_HINT + '\n'
        updated = text[:start] + block + text[end:]

    path.write_text(updated, encoding='utf-8')

print('ok')
