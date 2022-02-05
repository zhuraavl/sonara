

function initialize() {

    var markers = new Array();

    var mapOptions = {
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(37.987698,-120.385005),
        styles: [
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "weight": "5.00"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "gamma": "0.00"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "labels.text",
        "stylers": [
            {
                "gamma": "0.00"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "gamma": "0.00"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#434343"
            },
            {
                "weight": ".45"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "weight": "0.45"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "weight": ".45"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "weight": "0.45"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "gamma": "0.00"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text",
        "stylers": [
            {
                "gamma": "0.00"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#e5e5e5"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#dddddd"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]
  };


var map1 =
    '<div class="marker-box"><h4>Red Church</h4><p>42 Snell St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>The St. James Episcopal Church is commonly referred to as the “Red Church” because of its hallmark color.  It was built in the Carpenter Gothic style of architecture in 1859.  It is considered to be the oldest Episcopal church in California! It marks the gateway to Columbia State Historic Park as you leave our beautiful downtown corridor.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//42+Snell+St,+Sonora,+CA+95370/@37.9876984,-120.3871935,17z/" target="_blank">Direction</a><a href="https://www.stjamessonora.com/"  target="_blank">Website</a></div></div>',
    
    map2 = '<div class="marker-box"><h4>Tuolumne County Superior Court</h4><p>41 Yaney Ave, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>The Tuolumne County Superior Court was built in 1898. It is a stunning building that has received recognition on the National Register of Historic Places and is still a working courthouse to this day! Most of the original architecture and design has been retained and historical artifacts such as asylum records, blueprints, and deeds can be found on the second floor. It has been captured in numerous movies, including Back to the Future 3.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//Tuolumne+County+Courthouse,+41+Yaney+Ave,+Sonora,+CA+95370/@37.9851516,-120.4192362,13z" target="_blank">Direction</a><a href="www.tuolumne.courts.ca.gov/"  target="_blank">Website</a></div></div>',
    
    map3 = '<div class="marker-box"><h4>Tuolumne County Veterans Hall and Museum</h4><p>9 N Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>Tuolumne County Veterans Hall and Museum is dedicated to honoring Tuolumne County veterans who have proudly served in conflicts ranging from WWI to present.  You can view retired military artifacts located within the museum.  Special tours can be arranged.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//9+N+Washington+St,+Sonora,+CA+95370/@37.9855839,-120.4182456,13z" target="_blank">Direction</a><a href="https://www.sonoraca.com/visit-sonora/museums/veterans-memorial-military-museum/"  target="_blank">Website</a></div></div>',
    
    map4 = '<div class="marker-box"><h4>Sonora Opera Hall</h4><p>250 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>The Sonora Opera Hall began as a flour mill in 1879, it burned down a few years later and the Opera Hall was resurrected in its place in 1875 for the community of Sonora.  Many parties and events have been held inside this historical venue and it continues to be used by the community today.  Any weekend of the year you can find a wedding, art show, concert, or networking event!  This lovely old building features brick architecture and a balcony that gazes right into the heart of downtown. </p><div class="buttons-row"><a href="https://www.google.com/maps/dir//250+S+Washington+St,+Sonora,+CA+95370/@37.9817503,-120.4174351,13z" target="_blank">Direction</a><a href="https://www.sonoraca.com/opera-hall/"  target="_blank">Website</a></div></div>',
    
    map5 = '<div class="marker-box"><h4>Tuolumne County Museum</h4><p>158 Bradford St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>The Tuolumne County Museum is operated by the Tuolumne County Historical Society.  Housed in the former gold rush jail, the grounds have been converted to a serene museum setting that represents the rich and diverse cultural heritage that Tuolumne County was born from. </p><div class="buttons-row"><a href="https://www.google.com/maps/dir//158+Bradford+St,+Sonora,+CA+95370/@37.9837887,-120.4206546,13z" target="_blank">Direction</a><a href="https://tchistory.org/"  target="_blank">Website</a></div></div>',
    
    map6 = '<div class="marker-box"><h4>Tuolumne County Fire Museum</h4><p>125 N Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>This small museum features firefighting memorabilia from the late 19th and early to middle 20th centuries.  On display are old fire engines and firefighter suits as well as a history of how wildfire signage and records have changed through the years. </p><div class="buttons-row"><a href="https://www.google.com/maps/dir//125+N+Washington+St,+Sonora,+CA+95370/@37.98677,-120.4191687,13z" target="_blank">Direction</a><a href="https://www.sonoraca.com/visit-sonora/museums/sonora-fire-museum/"  target="_blank">Website</a></div></div>',
    
    map7 = '<div class="marker-box"><h4>Columbia State Historic Park and Nelson’s Columbia Candy</h4><p>22708 Broadway Street, Columbia, CA 95310</p><img src="media/mapmarker.jpg"><p>Columbia State Historic Park continues to be a working gold rush town steeped in a rich history.  Activities range from stagecoach rides and gold panning to candle dipping and old timey photos!  You can also find one of two local professional theater houses run by Sierra Repertory Theatre in the old Fallon House. Also be sure to check out Nelson’s Columbia Candy located on the Main Street of Columbia to see how old-fashioned candy is made.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//22708+Broadway+St,+Columbia,+CA+95310/@38.034101,-120.4042364,17z" target="_blank">Direction</a><a href="www.parks.ca.gov/?page_id=552"  target="_blank">Website</a></div></div>',
    
    map8 = '<div class="marker-box"><h4>Basecamp at Inner Sanctum Cellars</h4><p>22004 Parrotts Ferry Rd, Sonora, CA 95370</p><img src="media/mapmarker.jpg"><p>Pick up some bubbly to enjoy or have a glass of wine from Inner Sanctum Cellar’s exquisite lineup of award-winning wines on their idyllic grounds. Kick-back around the firepit with friends and catch one of their many exciting concerts! You may even sneak a peek at some of their beloved farm animals.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//22004+Parrotts+Ferry+Rd,+Sonora,+CA+95370/@38.0214772,-120.4337906,13z" target="_blank">Direction</a><a href="https://www.innersanctumcellars.com/"  target="_blank">Website</a></div></div>',
    
    map9 = '<div class="marker-box"><h4>Railtown 1897</h4><p>10501 Reservoir Rd. Jamestown, CA 95327</p><img src="media/mapmarker.jpg"><p>This operating train depot houses numerous trains and also serves as a museum. View set pieces from such notable shows as “The Petticoat Junction” as well as the train from Back to the Future 3.  Call ahead for specialty rides like the Polar Express and the Mother’s Day wildflower train!</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//Reservoir+Rd,+Jamestown,+CA+95327/@37.9495589,-120.4232991,15z" target="_blank">Direction</a><a href=""  target="_blank">Website</a></div></div>',
    
    map10 = '<div class="marker-box"><h4>Teleli Golf Club</h4><p>17566 Lime Kiln Rd, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>A wonderful place to golf and equally as enjoyable for having lunch with friends. 18 holes of golf and a country club with bistro fare.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//17566+Lime+Kiln+Rd,+Sonora,+CA+95370/@37.9357559,-120.3537815,17z/" target="_blank">Direction</a><a href="https://www.teleligolfclub.com/" target="_blank">Website</a></div></div>',
    
    
    // food and drinks
    
    map11 = '<div class="marker-box"><h4>Diamondback Grill</h4><p>93 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>American gourmet diner.  Relaxed atmosphere perfect for a date or the family! Of course, the burgers are amazing, but equally delicious are all of the salads on offer. Don’t forget to also take a look at their extensive wine list.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//93+S+Washington+St,+Sonora,+CA+95370/@37.9842223,-120.4172775,13z" target="_blank">Direction</a><a href="https://diamondbackgrill.com/" target="_blank">Website</a></div></div>',
    
    map12 = '<div class="marker-box"><h4>El Arroyo Cantina & Mexican Kitchen</h4><p>126 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>El Arroyo translates to “The Creek” in Spanish.  Sit alongside the famed Woods Creek that runs through town. This appropriately named cantina offers truly authentic Jalisco-style food and there’s even a full bar – enjoy that margarita moment!</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//126+S+Washington+St,+Sonora,+CA+95370/@37.9836409,-120.3845514,17z" target="_blank">Direction</a><a href="https://www.facebook.com/Elarroyocantina/" target="_blank">Website</a></div></div>',
    
    map13 = '<div class="marker-box"><h4>The Independent Wine Co</h4><p>13 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>El The Independent Wine Co. for the true oenophile or foodie!  This shop offers savory and imaginative tapas paired with their always changing and ever-growing wine selection that spans from old world to new.  Check-out their schedule for classes and special events! </p><div class="buttons-row"><a href="https://www.google.com/maps/dir//13+S+Washington+St,+Sonora,+CA+95370/@37.985196,-120.418088,13z" target="_blank">Direction</a><a href="https://independentwineco.com/" target="_blank">Website</a></div></div>',
    
    map14 = '<div class="marker-box"><h4>The Sportsman</h4><p>90 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>The Sportsman is proudly one of the only bars of California that is also a gun store!  A local favorite after a hard day’s work at the mill or in the mines.  Grab a beer and “shoot” the bull with some local characters. </p><div class="buttons-row"><a href="https://www.google.com/maps/dir//90+S+Washington+St,+Sonora,+CA+95370/@37.9840694,-120.4176828,13z" target="_blank">Direction</a><a href="https://www.thesportsmansonora.com/" target="_blank">Website</a></div></div>',
    
    map15 = '<div class="marker-box"><h4>Sonora Brewery and Tap Room</h4><p>1 East Linoberg St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>The Sonora Brewery and Tap Room a new local favorite offering pub style food and beers that are crafted onsite. Enjoy a burger with fries or try the calamari and chipotle dip, be sure to wash it down with a delicious ale.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//1+Linoberg+St,+Sonora,+CA+95370/@37.9840955,-120.3852438,17z/" target="_blank">Direction</a><a href="https://www.facebook.com/sonorataproom/" target="_blank">Website</a></div></div>',
    
    map16 = '<div class="marker-box"><h4>Sonora Brewery and Tap Room</h4><p>1 East Linoberg St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>The Sonora Brewery and Tap Room a new local favorite offering pub style food and beers that are crafted onsite. Enjoy a burger with fries or try the calamari and chipotle dip, be sure to wash it down with a delicious ale.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//1+Linoberg+St,+Sonora,+CA+95370/@37.9840955,-120.3852438,17z" target="_blank">Direction</a><a href="https://www.facebook.com/sonorataproom/" target="_blank">Website</a></div></div>',
    
    
    map17 = '<div class="marker-box"><h4>Bagel Bin</h4><p>83 N Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>The Bagel Bin is a downtown breakfast fixture for over 20 years.  Located only one door down from our hotel.  Choose from a variety of house made shmears and fresh baked bagels ranging from honest to goodness whole wheat and the more decadent glazed blueberry.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//83+N+Washington+St,+Sonora,+CA+95370/@37.986424,-120.3862441,17z" target="_blank">Direction</a><a href="bagel-bin.edan.io/" target="_blank">Website</a></div></div>',
    
    map18 = '<div class="marker-box"><h4>Emberz Restaurant</h4><p>177 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>Emberz is a fun and flirty restaurant bar that is the perfect place to kick off the evening or go in for one last hurrah! Start with drinks from their extensive craft cocktail menu or settle in for a bite to eat with their yummy selection of wood fired pizzas.  They are usually serving food until 11 pm!</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//177+S+Washington+St,+Sonora,+CA+95370/@37.9830589,-120.4167372,13z" target="_blank">Direction</a><a href="https://www.facebook.com/Emberz-285208454835463/" target="_blank">Website</a></div></div>',
    
    map19 = '<div class="marker-box"><h4>Union Hill Coffee</h4><p>63 N Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>Union Hill Coffee is a coffee lover’s paradise!  Only high-end coffee and teas are     served and brewed by the cup to order. Always check their hours of operation beforehand as they vary by season.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//63+N+Washington+St,+Sonora,+CA+95370/@37.9861327,-120.4187635,13z" target="_blank">Direction</a><a href="www.unionhillcoffee.com/" target="_blank">Website</a></div></div>',
    
    map20 = '<div class="marker-box"><h4>Revive Café</h4><p>81 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>Revive Café features a cozy cottage setting with delicious baked goods in a family friendly atmosphere. It’s the perfect setting to read a book or catch up with a friend. You’ll also love their espresso bar.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//81+S+Washington+St,+Sonora,+CA+95370/@37.9843969,-120.4174576,13z" target="_blank">Direction</a><a href="https://www.revivecoffee.co/" target="_blank">Website</a></div></div>',
    
    map21 = '<div class="marker-box"><h4>Yoshoku Ramen</h4><p>110 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>Savory Ramen bowls and fresh poke bowls with garnishes that you choose.  Make sure to get your order in early, as they fill up fast.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//110+S+Washington+St,+Sonora,+CA+95370/@37.9838194,-120.4175364,13z" target="_blank">Direction</a><a href="https://yoshokuonlineorder.shopsettings.com/" target="_blank">Website</a></div></div>',
    
    map22 = '<div class="marker-box"><h4>Formosa Boba Tea Bar</h4><p>104 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>A generous selection of teas and boba drinks that are a delicious afternoon pick me up. In addition to the tea selection, there are several imported drinks that are surprisingly yummy even if you’ve never tried them before.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//104+S+Washington+St,+Sonora,+CA+95370/@37.9839069,-120.4175927,13z/" target="_blank">Direction</a><a href="https://www.yelp.com/biz/formosa-sonora" target="_blank">Website</a></div></div>',
    
    map23 = '<div class="marker-box"><h4>Zane’s Iron Horse Lounge</h4><p>97 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>Another one of a kind nightspot that you won’t want to miss!  For the rebel in all of us... You’ll just have to trust us on this one!</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//97+S+Washington+St,+Sonora,+CA+95370/@37.9842231,-120.4171425,13z" target="_blank">Direction</a><a href="https://www.facebook.com/pages/Zane-Iron-Horse-Lounge/118486991498821" target="_blank">Website</a></div></div>',
    
    map24 = '<div class="marker-box"><h4>Indigeny Reserve</h4><p>14679 Summers Ln, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>Located just a couples miles east of downtown Sonora, this family owned distillery produces some of the best cider and brandy around!  Tour the distillery and be sure to check out their gift shop that has a little something for everyone.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//14679+Summers+Ln,+Sonora,+CA+95370/@38.0117757,-120.3550562,13z" target="_blank">Direction</a><a href="https://indigenyreserve.com/" target="_blank">Website</a></div></div>',
    
    
    // Shopping and Care
    
    map25 = '<div class="marker-box"><h4>Candy Vault</h4><p>42 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>At Candy Vault, a whole lot of candies collide!  Every type of confection from nostalgic vintage candies to imported varieties are found here. Gourmet ice cream is also served as well as specialty CBD caramels. While you’re inside, check out the Wonka Vault!</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//42+S+Washington+St,+Sonora,+CA+95370/@37.9846817,-120.385264,17z" target="_blank">Direction</a><a href="https://www.facebook.com/TheCandyVault/" target="_blank">Website</a></div></div>',
    
    map26 = '<div class="marker-box"><h4>Rustic Roses</h4><p>71 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>Rustic Roses is a wonderful store to peruse on Washington Street. It has an     extensive collection of well curated antiques alongside women and men’s wear. You will be hard pressed not to find something to take home or wear out of the store.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//71+S+Washington+St,+Sonora,+CA+95370/@37.9845094,-120.4175252,13z" target="_blank">Direction</a><a href="https://www.rusticrosescalifornia.com/" target="_blank">Website</a></div></div>',
    
    map27 = '<div class="marker-box"><h4>Aloft Art Gallery</h4><p>167 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>A stunning collection representing some of the best local artists around.  The building has also been completely remodelled to its historic beauty.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//167+S+Washington+St,+Sonora,+CA+95370/@37.983176,-120.3842686,17z/" target="_blank">Direction</a><a href="www.aloftartgallery.com/" target="_blank">Website</a></div></div>',
    
    map28 = '<div class="marker-box"><h4>Heel To Toe</h4><p>108 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>Give your footsies (and the rest of you!) everything they want and more!  This high end retailer carries brands such as Ugg, Paula Carvalho, and Hobo just to name a few.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//CA-108+%26+S+Washington+St,+California+95370/@37.9678133,-120.4133838,13z/" target="_blank">Direction</a><a href="https://www.facebook.com/Heel-to-Toe-Boutique-162895210415592/" target="_blank">Website</a></div></div>',
    
    map29 = '<div class="marker-box"><h4>Addictions Fashion</h4><p>128 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>A super trendy boutique carrying names such as Zsupply.  Find some cute boho earrings or a clutch to match those fun new booties for date night!</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//128+S+Washington+St,+Sonora,+CA+95370/@37.9836004,-120.4174464,13z" target="_blank">Direction</a><a href="https://www.instagram.com/addictionsboutique/?hl=en" target="_blank">Website</a></div></div>',
    
    map30 = '<div class="marker-box"><h4>Sonora Fly Company</h4><p>78 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>Avid fishermen need only one stop and this is it! Name brands, fair prices, and a little something for everyone.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//78+S+Washington+St,+Sonora,+CA+95370/@37.9842816,-120.4178629,13z" target="_blank">Direction</a><a href="https://sonorafly.com/" target="_blank">Website</a></div></div>',
    
    map31 = '<div class="marker-box"><h4>Wildbud Co</h4><p>59 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>Boho chic is queen in this upscale floral shop and home goods boutique.  Send something to that special someone in your life.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//59+S+Washington+St,+Sonora,+CA+95370/@37.9847476,-120.4175477,13z" target="_blank">Direction</a><a href="https://www.wildbud.co/" target="_blank">Website</a></div></div>',
    
    map32 = '<div class="marker-box"><h4>Antiques Etcetera</h4><p>18 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>Remember the magic of grandma’s attic?  Step back in time and find treasures from your past in every little nook and cranny.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//18+S+Washington+St,+Sonora,+CA+95370/@37.9850512,-120.3854878,17z" target="_blank">Direction</a><a href="https://www.facebook.com/antiqueset18/?rf=135442439838419" target="_blank">Website</a></div></div>',
    
    map33 = '<div class="marker-box"><h4>Sonora Deluxe Barbershop</h4><p>23 Theall St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>Get yourself all cleaned up and shaved down in this vintage family owned shop!</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//23+Theall+St,+Sonora,+CA+95370/@37.98351,-120.3839644,17z" target="_blank">Direction</a><a href="https://www.facebook.com/sonoradeluxebarber/" target="_blank">Website</a></div></div>',
    
    map34 = '<div class="marker-box"><h4>La ti Da Salon</h4><p>68 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>Your hair will thank you!  Freshen up with a cut or color or maybe dive into those eyelash extensions you’ve been thinking about!</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//68+S+Washington+St,+Sonora,+CA+95370/@37.984438,-120.4179417,13z" target="_blank">Direction</a><a href="https://www.facebook.com/latidasalon209/" target="_blank">Website</a></div></div>',
    
    map35 = '<div class="marker-box"><h4>D&D Nails</h4><p>291 S Washington St, Sonora, CA 95370, United States</p><img src="media/mapmarker.jpg"><p>A little pampering when you need it most!  Offering a wide range of manicure and pedicure spa services as well as DIP nails, gel nails, and waxing services.  Take a load off!  You deserve it!</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//291+S+Washington+St,+Sonora,+CA+95370/@37.9813023,-120.4168273,13z" target="_blank">Direction</a><a href="https://www.facebook.com/D-D-Nails-899628893537199/" target="_blank">Website</a></div></div>',
    
    map36 = '<div class="marker-box"><h4>Sierra Nevada Adventure Company</h4><p>2293 CA-4, Arnold, CA 95223, United States</p><p>Offering brands like Patagonia, Keen, Chaco, and Kuhl.  They also offer a large collection of paddle boards, climbing gear, and trail books to enhance every hike!</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//2293+CA-4,+Arnold,+CA+95223/@38.2382469,-120.3978915,13z" target="_blank">Direction</a><a href="https://snacattack.com/" target="_blank">Website</a></div></div>',
    
    map37 = '<div class="marker-box"><h4>Amala Detox</h4><p>31 S Washington St, Sonora, CA 95370, United States</p><p>Step in and wind down with an ionic foot soak and scrub.  As you begin to rejuvenate you can quench your thirst with a selection of teas that are sure to satisfy your taste buds and your soul.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//31+S+Washington+St,+Sonora,+CA+95370/@37.9850975,-120.4177728,13z" target="_blank">Direction</a><a href="https://www.amaladetox.com/" target="_blank">Website</a></div></div>',

    map40 = '<div class="marker-box"><h4>Hotel Lumberjack</h4><p>128 S GREEN ST, SONORA, CA 95370, United States</p><p>Hotel Lumberjack is proudly located at the center of historic Sonora, California. Our hotel is a newly envisaged Americana Motel experience. We’re in the heart of the Gold Country, close to curated boutiques and fantastic dining.</p><div class="buttons-row"><a href="https://www.google.com/maps/dir//128+S+Green+St,+Sonora,+CA+95370/@37.9833882,-120.4183583,13z" target="_blank">Direction</a><a href="https://hotellumberjack.com" target="_blank">Website</a></div></div>'
    
    


    

    var locations = [
        [new google.maps.LatLng(37.987698,-120.385005), 'Red Church', map1, 'attractions'],
        [new google.maps.LatLng(37.985157,-120.384217), 'Tuolumne County Superior Court', map2, 'attractions'],
        [new google.maps.LatLng(37.985589,-120.383226), 'Tuolumne County Veterans Hall and Museum', map3, 'attractions'],
        [new google.maps.LatLng(37.981756,-120.382416), 'Sonora Opera Hall', map4, 'attractions'],
        [new google.maps.LatLng(37.983794,-120.385635), 'Tuolumne County Museum', map5, 'attractions'],
        [new google.maps.LatLng(37.986775,-120.384149), 'Tuolumne County Fire Museum', map6, 'attractions'],
        [new google.maps.LatLng(38.034101,-120.402048), 'Columbia State Historic Park and Nelson’s Columbia Candy', map7, 'attractions'],
        [new google.maps.LatLng(38.02863,-120.410141), 'Columbia Airport', map8, 'attractions'],
        [new google.maps.LatLng(38.021357,-120.398782), 'Basecamp at Inner Sanctum Cellars', map9, 'attractions'],
        [new google.maps.LatLng(37.950044,-120.414956), 'Railtown 1897', map10, 'attractions'],
        [new google.maps.LatLng(37.935756,-120.351593), 'Teleli Golf Club. 4 miles', map11, 'attractions'],
        

        //food and drinks
        [new google.maps.LatLng(37.984228,-120.382258 ), 'Diamondback Grill', map12, 'food-and-drinks'],
        [new google.maps.LatLng(37.983641,-120.38236), 'El Arroyo Cantina & Mexican Kitchen', map13, 'food-and-drinks'],
        [new google.maps.LatLng(37.985201,-120.383069 ), 'The Independent Wine Co', map14, 'food-and-drinks'],
        [new google.maps.LatLng(37.984075,-120.382663 ), 'The Sportsman', map15, 'food-and-drinks'],
        [new google.maps.LatLng(37.984096,-120.383055 ), 'Sonora Brewery and Tap Room', map16, 'food-and-drinks'],
        [new google.maps.LatLng(37.986424,-120.384055 ), 'Bagel Bin', map17, 'food-and-drinks'],
        [new google.maps.LatLng(37.983064,-120.381718 ), 'Emberz Restaurant', map18, 'food-and-drinks'],
        [new google.maps.LatLng(37.986138,-120.383744 ), 'Union Hill Coffee', map19, 'food-and-drinks'],
        [new google.maps.LatLng(37.984402,-120.382438 ), 'Revive Café', map20, 'food-and-drinks'],
        [new google.maps.LatLng(37.983825,-120.382517 ), 'Yoshoku Ramen', map21, 'food-and-drinks'],
        [new google.maps.LatLng(37.983912,-120.382573 ), 'Formosa Boba Tea Bar', map22, 'food-and-drinks'],
        [new google.maps.LatLng(37.984228,-120.382123 ), 'Zane’s Iron Horse Lounge', map23, 'food-and-drinks'],
        [new google.maps.LatLng(38.011781,-120.320037 ), 'Indigeny Reserve', map24, 'food-and-drinks'],
      
      
        //Shopping and Care
        
        [new google.maps.LatLng(37.984682,-120.383075  ), 'Candy Vault', map25, 'shopping-and-care'],
        [new google.maps.LatLng(37.984515,-120.382506 ), 'Rustic Roses', map26, 'shopping-and-care'],
        [new google.maps.LatLng(37.985051,-120.383299), 'Aloft Art Gallery', map27, 'shopping-and-care'],
        [new google.maps.LatLng(37.967819,-120.378364), 'Heel To Toe', map28, 'shopping-and-care'],
        [new google.maps.LatLng(37.983606,-120.382427), 'Addictions Fashion', map29, 'shopping-and-care'],
        [new google.maps.LatLng(37.984287,-120.382843), 'Sonora Fly Company', map30, 'shopping-and-care'],
        [new google.maps.LatLng(37.984645,-120.382696), 'Wildbud Co', map31, 'shopping-and-care'],
        [new google.maps.LatLng(37.984753,-120.382528), 'Antiques Etcetera', map32, 'shopping-and-care'],
        
        [new google.maps.LatLng(37.983176,-120.38208), 'Sonora Deluxe Barbershop', map33, 'shopping-and-care'],
        [new google.maps.LatLng(37.983605,-120.381403), 'La ti Da Salon', map34, 'shopping-and-care'],
        [new google.maps.LatLng(37.981308,-120.381808), 'D&D Nails', map35, 'shopping-and-care'],
        [new google.maps.LatLng(38.238252,-120.362872), 'Sierra Nevada Adventure Company', map36, 'shopping-and-care'],
        [new google.maps.LatLng(37.985103,-120.382753), 'Amala Detox', map37, 'shopping-and-care']
      
        
    ];
  
   
    var locationsSecond = [
        [new google.maps.LatLng(37.988,-120.385005), 'Hotel Lumberjack', map40],
    ];
  
  
//    var locationstwo = [
//        [new google.maps.LatLng(37.985157,-120.384217), 'Marker name second', maptwoOneContent]
//    ];
//  
//  var locations = locationsone.concat(locationstwo);

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var infowindow = new google.maps.InfoWindow();

  
      
    for (var i = 0; i < locations.length; i++) {

        // Append a link to the markers DIV for each marker

        $('.markers').each(function( index ) {
            if($(this).attr('data-location-type') == locations[i][3]) {
                $(this).append('<a class="marker-link" data-markerid="' + i + '" href="#map">' + (i + 1) + ". " + locations[i][1] + '</a> ');
            }
        });

        var mapIcon = {
            path: google.maps.SymbolPath.CIRCLE,
            fillOpacity: 1,
            fillColor: '#000',
            strokeOpacity: 1,
            strokeWeight: 2,
            strokeColor: '#000',
            scale: 14
        };

        var marker = new google.maps.Marker({
            position: locations[i][0],
            map: map,
            title: locations[i][1],
            icon: mapIcon,
            label: {color: '#fff', fontSize: '15px', fontFamily:' American Typewriter', fontWeight: '500', text: (i+1).toString()}
        });

        // Register a click event listener on the marker to display the corresponding infowindow content
       
        registerClick(marker, locations, map, i);

        // Add marker to markers array
        markers.push(marker);
    }
  
    for (var i = 0; i < locationsSecond.length; i++) {

        var markerIcon2 = {
            url: "media/sonaramarker.svg",
            scaledSize: new google.maps.Size(35, 35),
        };

        var marker2 = new google.maps.Marker({
            position: locationsSecond[i][0],
            map: map,
            title: locationsSecond[i][1],
            icon: markerIcon2,
        });

        registerClick(marker2, locationsSecond, map, i);

        markers.push(marker2);

    }

    function registerClick(marker, locations, map, i){
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][2]);
                infowindow.open(map, marker);
                var activeEle = (locations[i][1]);
                $('.marker-link').removeClass('active')
                $('.marker-link:contains('+activeEle+')').addClass('active');
            }

        })(marker, i));

    }
  
  
  
  
  
  

    // Trigger a click event on each marker when the corresponding marker link is clicked
    $('.marker-link').on('click', function () {
        $('.marker-link').removeClass('active');
        $(this).addClass('active');
        google.maps.event.trigger(markers[$(this).data('markerid')], 'click');
    });

}




initialize();