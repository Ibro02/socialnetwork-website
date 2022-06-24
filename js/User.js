class User 
{
    user_id = '';
    username = '';
    email = '';
    password= '';
    api_url = 'https://62b5bee6da3017eabb219800.mockapi.io/';

    create() {
        let data = {
            username: this.username,
            email: this.email,
password: this.password
        }

        data = JSON.stringify(data);

    fetch(this.api_url + '/users',{
        method: 'POST',
        headers: 
    {
        'Content-Type': 'application/json'
    },
    body: data
    })
    .then(response => response.json())
    .then(data =>
        {
let session = new Session();
session.user_id=data.id;
session.startSession();
           window.location.href="./hexa.html"
        })
    }

    login()
    {
        fetch(this.api_url + '/users')
        .then(response=> response.json())
        .then(data => 
            {
                let login_successful = 0;
              data.forEach(db_user => {
                if(db_user.email === this.email && db_user.password===this.password)
                {
                    let session= new Session();
                    session.user_id = db_user.id;
                    session.startSession();
                    login_successful=1;
                    window.location.href = "./hexa.html";
                }
            });
                if(login_successful===0)
                {
                    alert("Pogresan email ili lozinka!")
                }
            })
    }
}
