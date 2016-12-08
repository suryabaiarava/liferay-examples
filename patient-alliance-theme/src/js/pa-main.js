/*begin responsive-menu script*/
            
           function myFunction() {
                var x = document.getElementById("myTopnav");
                if (x.className === "topnav") {
                    x.className += " responsive";
                } else {
                    x.className = "topnav";
                }
            }            
            $(".fa-bars").click(function(){
               $(".fa-close").show();
                $(".fa-bars").hide();
            });
            
            $(".fa-close").click(function(){
               $(".fa-bars").show();
                $(".fa-close").hide();
            });
            /*over responsive-menu script*/
            
            /*begin header notifications script*/
            $('.data-toggle-settings').click(function(event){
                 event.stopPropagation();
                $('.settings-section').toggle(); 
                 $('.notifications-section').css('display','none'); 
                 $('.account-section').css('display','none');      
            });
         
           
            $('.data-toggle-notifications').click(function(event){
               event.stopPropagation();
                $('.notifications-section').toggle(); 
                 $('.settings-section').css('display','none');     
                 $('.account-section').css('display','none');   
                 $('.notifi-unread').hide();
                 $('.notifi-read').show();
            });
            
             $('.data-toggle-account').click(function(event){
                  event.stopPropagation();
                $('.account-section').toggle(); 
                 $('.settings-section').css('display','none');     
                 $('.notifications-section').css('display','none');     
            });
            
            $(document).click(function(){
                 $('.notifications-section').css('display','none'); 
                 $('.account-section').css('display','none');  
                 $('.settings-section').css('display','none');     
           });
            /*over header notifications script*/

            /*begin read and unread script*/
             $('.read-toggle').click(function(){
                     event.stopPropagation();
                       $('.notifi-read').show();
                        $('.notifi-unread').hide();
                        $('.read-toggle').addClass('effect-for-read-unread-tabs');
                        $('.unread-toggle').removeClass('effect-for-read-unread-tabs');
                        
                });
              $('.unread-toggle').click(function(){
                 event.stopPropagation();
                       $('.notifi-unread').show();
                        $('.notifi-read').hide();
                       $('.unread-toggle').addClass('effect-for-read-unread-tabs');
                       $('.read-toggle').removeClass('effect-for-read-unread-tabs');
                });  
            /*end read and unread script*/