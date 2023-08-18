'use client';

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        className="cursor-pointer peer"
        id={id}
        type="checkbox"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        className=" cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
        htmlFor={id}
      >
        {title}
      </label>
    </li>
  );
}

export default TodoItem;
