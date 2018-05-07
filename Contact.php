<!DOCTYPE html>

<html lang="en">
    
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Raluca Neferu, Contact</title>
    <meta name="Title" content="Raluca Neferu, Contact">
    <meta name="Author" content="Sebastian Neferu">
    <meta name="Subject" content="Raluca Neferu, Contact">
    <meta name="description" content="An exhibition of the fine artwork of a gifted artist.">
    <meta name="image" content="https://ralucaneferu.com/img/The-Muse-Raluca-Neferu-Large.jpg">
    <meta name="url" content="https://ralucaneferu.com/index.html">
    <meta name="Keywords" content="art gallery, artist, paintings, artwork, Raluca Neferu, portfolio, painter, contact">
    <meta name="Language" content="english">
    <meta name="Abstract" content="Raluca Neferu, Contact">
    <meta name="Copyright" content="2018-2018">
    <meta name="Designer" content="Sebastian Neferu">
    <meta name="Publisher" content="Sebastian Neferu">
    <meta name="Revisit-After" content="5 Days">
    <meta name="Distribution" content="Global">
    <meta name="Robots" content="All">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karla">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400i,700i">
    <link rel="stylesheet" type="text/css" href="css/style-prefix.css">
    <link rel="stylesheet" type="text/css" href="css/queries-prefix.css">
    <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png">
    <link rel="manifest" href="/img/site.webmanifest">
    <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-config" content="/img/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
</head>
    
<body>
    <header class="header">

        <h1 class="header__title">
            Raluca Neferu
        </h1>
        
        <a href="index.html">
            <picture class="header__logo">
                <source srcset="img/raluca-neferu-logo-1x.png 1x, img/raluca-neferu-logo-2x.png 2x" media="(min-width: 619px)"> 
                <source srcset="img/raluca-neferu-logo-medium-1x.png 1x, img/raluca-neferu-logo-medium-2x.png 2x" media="(min-width: 419px)"> 
                <source srcset="img/raluca-neferu-logo-small.png 1x, img/raluca-neferu-logo-1x.png 2x" media="(min-width: 0px)">    
                <img srcset="img/raluca-neferu-logo-1x.png 1x, img/raluca-neferu-logo-2x.png 2x" src="img/raluca-neferu-logo-1x.png" alt="Raluca Neferu">
            </picture> 
        </a>
        
        <nav class="header__navigation">
            <ul> 
                <li><a href="index.html">Gallery</a></li>
                <li><a href="About.html">About</a></li>
                <li><a href="Blog.html">Blog</a></li>
                <li><a href="Contact.php">Contact</a></li>
            </ul>
        </nav>
        
        <div class="header__information">
          <div class="u-padding-top-3">
            <p class="header__copyright R">Artwork & Content © 2018 by <a href="https://ralucaneferu.com" target="_blank" title="Raluca Neferu" rel="home">Raluca Neferu</a></p>
            <p class="header__copyright S">Web Design © 2018 by <a href="https://neferusebastian.com" target="_blank" title="Sebastian Neferu" rel="home">Sebastian Neferu</a></p>
          </div>
        </div>    
               
    </header>
    
    
    <main>
    
    <section class="form" id="form">
        
        <div class="row">
            <h2>I'm happy to hear from you!</h2>
        </div>
        <div class="row">
            <form method="post" action="mail-form.php" class="form__contact">
                <div class="row">
                    <div class="col span-1-of-3">
                        <label for="name">Name</label>
                    </div>
                    <div class="col span-2-of-3">
                        <input type="text" name="name" id="name" placeholder="Your name" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col span-1-of-3">
                        <label for="email">Email</label>
                    </div>
                    <div class="col span-2-of-3">
                        <input type="email" name="email" id="email" placeholder="Your email" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col span-1-of-3">
                        <label>Message Me</label>
                    </div>
                    <div class="col span-2-of-3">
                        <textarea name="message" placeholder="Your message"></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col span-1-of-3">
                        <label>&nbsp;</label>
                    </div>
                    <div class="col span-2-of-3">
                        <input type="submit" value="Send">
                    </div>
                    
                    <?php
                    
                    if($_GET['success'] == 1) {
                        echo "<div class=\"form__messages form__messages-success\">Thank you! Your message has been sent.</div>";
                    }
                    
                    if($_GET['success'] == -1) {
                        echo "<div class=\"form__messages form__messages-error\">Oops! Something went wrong. Please try again.</div>";
                    }  
                   
                   ?>
                </div>
            </form>
        </div>
    
    </section>
    
    </main>

    
</body>
</html>


