class MyTool {
  constructor({ data, config, api, readOnly }){
    // console.log(data)
    this.data = data;
    this.readOnly = readOnly;
  }
  static get isReadOnlySupported() {
    return true;
  }
  render() {
    const h4 = document.createElement("h4");
    h4.classList = 'light-head';
    h4.style.borderColor = this.data.color;
    h4.innerHTML=this.data.text;
    h4.contentEditable = false;
    return h4;
  }
  save(textarea) {
    return {
      text: textarea.value
    }
  }
}

export default MyTool
