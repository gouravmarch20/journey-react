const todoTask = ["play 1h", "study 9 hour", "sleep 6 hour", "si 2 hour"]
export const todoTaskCustom = todoTask.map((todo) => ({
  todo: todo,
  isDone: false,
  key: Math.random(),
}))

