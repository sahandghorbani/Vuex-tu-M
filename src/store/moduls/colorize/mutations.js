export default{
    changeColor(state) {
        if (state.theme=='light') {
            state.theme = 'dark'
        } else {
            state.theme = 'light'
        }
    }
}