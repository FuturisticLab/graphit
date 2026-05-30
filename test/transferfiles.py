from pathlib import Path
import shutil
from concurrent.futures import ThreadPoolExecutor, as_completed
import os
import sys

# Set these two paths
SOURCE_DIR = Path(r"This PC\Patricia's S20 FE\Internal storage\DCIM\Camera")      # Example: phone-mounted folder / drive
DEST_DIR = Path(r"C:\Users\jmarc\Photos\april26")

# Tune this if you want
MAX_WORKERS = min(8, (os.cpu_count() or 4) + 4)

def copy_one(src: Path, dst: Path):
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dst)

def main():
    if not SOURCE_DIR.exists():
        print(f"Source not found: {SOURCE_DIR}")
        sys.exit(1)

    DEST_DIR.mkdir(parents=True, exist_ok=True)

    files = [p for p in SOURCE_DIR.rglob("*") if p.is_file()]
    if not files:
        print("No files found.")
        return

    print(f"Found {len(files)} files. Copying with {MAX_WORKERS} workers...")

    copied = 0
    failed = 0

    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        futures = []
        for src in files:
            rel = src.relative_to(SOURCE_DIR)
            dst = DEST_DIR / rel
            futures.append(executor.submit(copy_one, src, dst))

        for i, future in enumerate(as_completed(futures), 1):
            try:
                future.result()
                copied += 1
            except Exception as e:
                failed += 1
                print(f"Failed: {e}")

            if i % 25 == 0 or i == len(futures):
                print(f"Progress: {i}/{len(futures)}")

    print(f"Done. Copied: {copied}, Failed: {failed}")

if __name__ == "__main__":
    main()