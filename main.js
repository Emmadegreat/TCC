class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `
            <header>
            <link rel="stylesheet" href="/css/index.css">
        <link rel="stylesheet" href="/css/bootstrap.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="icon" href="/images/logo.PNG">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> 
        
            <nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-blue"> <!--navbar-dark bg-dark-->
            <div class="container-fluid">
              <a class="navbar-brand" href="javascript:void(0)">Logo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mynavbar">
                  <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                      <a class="nav-link" href="javascript:void(0)"><i class="fa fa-home">&nbsp;</i>Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="javascript:void(0)" >About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="javascript:void(0)">Services</a>
                    </li>
                    <li class="nav-item">
                      <a href="/html/contact" class="nav-link">Contact us</a>
                    </li>
                  </ul>
                    <!--<form class="d-flex">
                      <input class="form-control me-2" type="text" placeholder="Search">
                      <button class="btn btn-primary" type="button">Search</button>
                    </form>-->
                </div>
              </div>
          </nav><!--HEADER ENDS HERE-->
            
            </header>
        `
    }
}
customElements.define('my-header', MyHeader);



/*
$(document).ready(function(){
    $("#header").load("head.html");
    $("footer").load("new.html");
});*/