const Input = (props) => {
    const { inputValue, inputName, handleChange, id } = props
    console.log('input', inputValue)
    return <input 
        type='text'
        value={inputValue}
        name={inputName}
        onChange={(e) => {
            console.log('event handler', inputValue)
            handleChange(e, id)
        }} size="2" 
    />
}
export default Input