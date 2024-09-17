# Super Simple To-Do List with DOM Manipulation

This project is a simple **To-Do List** application created using **HTML**, **CSS**, and **JavaScript**. The user can add tasks, delete them, and manage their to-do items directly in the browser. The project is focused on **DOM manipulation** to dynamically create, display, and remove tasks.

## Features

- Add tasks to the list
- Delete tasks from the list
- Supports task addition via a button or pressing the "Enter" key
- Simple, clean user interface
- Responsive design (optional styling)

## Preview

![To-Do List Screenshot](https://github.com/user-attachments/assets/00a1fc66-623d-41fd-94dc-51bb1bcf3bfd)
![To-Do List Screenshot with Items](https://github.com/user-attachments/assets/0a524da5-5ac7-4a0f-ab22-f69a00c562cf)

## Installation & Setup

1. **Clone the repository** or download the files:
   ```bash
   git clone https://github.com/pakagronglb/todolist-DOM-manipulation.git
   ```
   
2. **Navigate to the project directory**:
   ```bash
   cd todolist-DOM-manipulation
   ```

3. **Open the project in your browser**:
   - Double-click on the `index.html` file to open it in your browser.
   - Or use a live server extension (if you're using VSCode or other IDEs) to run the project.

## Usage

1. Enter a task in the input field at the top.
2. Click the **Add Task** button, or press **Enter** to add the task to the list.
3. Each task will appear in the list below with a red "✖" button next to it.
4. To delete a task, click the "✖" button next to the task.

## File Structure

```bash
todo-list/
│
├── index.html       # The main HTML file
├── style.css        # The CSS file for styling
└── script.js        # The JavaScript file handling DOM manipulation
```

## Technologies Used

- **HTML5**: Structure and layout of the application.
- **CSS3**: Styling for the user interface.
- **JavaScript (ES6)**: Handles functionality like adding and removing tasks, event handling, and DOM manipulation.

## How It Works

- **Adding Tasks**: When you enter text and click "Add Task" (or press "Enter"), the input is captured, and a new `<li>` element is dynamically created and appended to the task list (`<ul>`).
  
- **Deleting Tasks**: Each task has a delete button represented by the "✖" symbol. When clicked, the corresponding task is removed from the DOM, and it no longer appears in the list.

- **Event Handling**: JavaScript `eventListeners` handle button clicks and the "Enter" key press to add tasks, while the delete functionality is handled by clicking on the "✖" button.

## Customization

- **Styling**: You can easily modify the `style.css` file to change the appearance of the to-do list, such as adjusting the colors, fonts, or layout.
- **Additional Features**: Feel free to add more features like task editing, task priority, or even saving tasks to local storage.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
