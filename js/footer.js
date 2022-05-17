class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `
            <footer>
                <footer class="footer_head" id="footer_head"><!------------FOOTER START HERE------------>
                    <div class="container" id="footer_container">
                        <div class="row" id="footer_row">
                            <div class="col-sm" id="footer_1">
                                <h1 id="soc_id" style="margin-bottom: 1.1rem;">Address</h1>
                                <p>23 Independence Layout Enugu, Enugu State Nigeria</p>
                            </div>
                
                            <div class="col-sm" id="footer_2">
                                <h1 id="soc_id">Social media links</h1> 
                                <ul class="social_media">
                                    <li class="social_media_link" id="social_media_link">
                                        <a href="https://www.facebook.com">Facebook</a>
                                    </li>
                                    <li class="social_media_link" id="social_media_link">
                                        <a href="https://www.twitter.com">Twitter</a>
                                    </li>
                                    <li class="social_media_link" id="social_media_link">
                                        <a href="https://www.linkedin.com">Linkedin</a>
                                    </li>
                                </ul>
                  
                            </div>
      
                            <div class="col-sm" id="footer_3">
                                <h1 id="soc_id">Quick links</h1>
                                <ul class="quick_link_menu">
                                    <li class="quick_link">
                                        <a href="/html/header.html">Home</a>
                                    </li>
                                    <li class="quick_link">
                                        <a href="/html/about.html">About</a>
                                    </li>
                                    <li class="quick_link">
                                        <a href="/html/services.html">Services</a>
                                    </li>
                                    <li class="quick_link">
                                        <a href="/html/contact.html">Contact us</a>
                                    </li>
                                </ul>
                            </div>
      
                            <div class="col-sm" id="footer_4">
                                <h1 id="soc_id" style="margin-bottom: 2rem;">Contact</h1>
                                <p>+234-703-453-4697</p>
                                <p>+234-902-890-5343</p>
                            </div>
                        </div><!--footer_row end here-->
                            <hr id="hr2">

                        <div class="row" id="footer-bottom_row">
                            <div class="col-sm" id="footer_bottom_col">
                                <span><a href="">All Rights Reserved</a></span> &nbsp;|&nbsp;
                                <span>Copyright</span>&nbsp;<span id="rights"></span> &nbsp;|&nbsp;
                                <span>TCC LIMITED</span>
                            </div>
                        </div>
                    </div>
                </footer><!------------FOOTER END HERE------------>
      
      
      
          
                <script src="/js/jquery.js"></script><!--downloaded jquery file--hosted jquery file-->
        
                <script src="/app.js"></script>
                <script src="/bootstrap.js"></script>
                
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
                <!--<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>-->

            </footer>
    
        `
    }
}
customElements.define('my-footer', MyFooter);