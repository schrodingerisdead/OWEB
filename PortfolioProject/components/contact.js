function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "oreskovam7@gmail.com",
        Password : "password",
        To : 'oreskovam7@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name"+document.getElementById("name").value
        +"<br> Email: " + document.getElementById("email").value
        +"<br> Subject: " +document.getElementById("subject").value
        +"<br> Messsage: "+document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
}