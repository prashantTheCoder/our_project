const menubaritems=document.querySelector('.menu-bar-items');

function hamburgermenu(){
    
    menubaritems.innerHTML=`<ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="About.html">About</a></li>
                    <li><a href="destination.html">Destinations
                            <div class="dropdown">
                                <ul>
                                    <li><a href="#" class="dropdown-menu">Patna</a></li>
                                    <li><a href="#" class="dropdown-menu">Rajgir</a></li>
                                    <li><a href="#" class="dropdown-menu">Bodh Gaya</a></li>
                                    <li><a href="#" class="dropdown-menu">Kaimur</a></li>
                                    <li><a href="#" class="dropdown-menu">Vaishali</a></li>
                                    <li><a href="#" class="dropdown-menu">Muzaffarpur</a></li>
                                </ul>
                            </div>
                        </a>
                    </li>
                    <li><a href="#">Glories</a></li>
    
                </ul>`
}

menubaritems.addEventListener('click',hamburgermenu);


