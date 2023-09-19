
const Input = ({ value, onChange }) => {
  return (
    <form>
      <input type="text"
        placeholder="search"
        value={value}
        onChange={onChange} />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Input;
