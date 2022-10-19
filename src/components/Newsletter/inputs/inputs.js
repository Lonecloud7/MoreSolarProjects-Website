import React from "react"

function inputs() {
  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        placeholder="Enter full name"
        name="name"
        id={"textArea"}
        required
        pattern="^[A-Za-z0-9]{1,20}$"
      />
      <span>error email message</span>

      <textarea
            name="message"
            rows="5"
            placeholder="Enter Message"
            id="textArea"
            required
            pattern="^[A-Za-z0-9]{10,200}$"
          />
          <span>error email message</span>

          <input type="submit" value="Send" className={styles.newsbtn} />
    </div>
  )
}

export default inputs
