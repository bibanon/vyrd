var AdBrite_IAB_Zone_Title_Color_Default = '800000';
var AdBrite_IAB_Zone_Text_Color_Default = '333333';
var AdBrite_IAB_Zone_Background_Color_Default = 'FFFFFF';
var AdBrite_IAB_Zone_Border_Color_Default = '9988ee';
var AdBrite_IAB_Zone_Title_Color_Processed,
             AdBrite_IAB_Zone_Text_Color_Processed,
             AdBrite_IAB_Zone_Background_Color_Processed,
             AdBrite_IAB_Zone_Border_Color_Processed,
             AdBrite_Title_Color,
             AdBrite_Text_Color,
             AdBrite_Background_Color,
             AdBrite_Border_Color;


         function AdBrite_IAB_Zone_Test_Color(color) {
            if (typeof(color) != 'string') return false;
            if (!color.match(/[0-9A-Fa-f]{6}/)) return false;
            return color;
         }

         try {
            AdBrite_IAB_Zone_Title_Color_Processed = AdBrite_Title_Color;
            if (AdBrite_IAB_Zone_Title_Color_Processed == '') {
               AdBrite_IAB_Zone_Title_Color_Processed = AdBrite_IAB_Zone_Title_Color_Default;
            }
         } catch (ex) {
            AdBrite_IAB_Zone_Title_Color_Processed = AdBrite_IAB_Zone_Title_Color_Default;
         }

         try {
            AdBrite_IAB_Zone_Text_Color_Processed = AdBrite_Text_Color;
            if (AdBrite_IAB_Zone_Text_Color_Processed == '') {
               AdBrite_IAB_Zone_Text_Color_Processed = AdBrite_IAB_Zone_Text_Color_Default;
            }
         } catch (ex) {
            AdBrite_IAB_Zone_Text_Color_Processed = AdBrite_IAB_Zone_Text_Color_Default;
         }

         try {
            AdBrite_IAB_Zone_Background_Color_Processed = AdBrite_Background_Color;
            if (AdBrite_IAB_Zone_Background_Color_Processed == '') {
               AdBrite_IAB_Zone_Background_Color_Processed = AdBrite_IAB_Zone_Background_Color_Default;
            }
         } catch (ex) {
            AdBrite_IAB_Zone_Background_Color_Processed = AdBrite_IAB_Zone_Background_Color_Default;
         }

         try {
            AdBrite_IAB_Zone_Border_Color_Processed = AdBrite_Border_Color;
            if (AdBrite_IAB_Zone_Border_Color_Processed == '') {
               AdBrite_IAB_Zone_Border_Color_Processed = AdBrite_IAB_Zone_Border_Color_Default;
            }
         } catch (ex) {
            AdBrite_IAB_Zone_Border_Color_Processed = AdBrite_IAB_Zone_Border_Color_Default;
         }AdBrite_Title_Color = '';
            AdBrite_Text_Color = '';
            AdBrite_Background_Color = '';
            AdBrite_Border_Color = '';


            var AdBrite_IAB_Iframe_URL = 'http://ads.adbrite.com/adserver/display_iab_ads.php?sid=196241' +
            '&title_color=' + AdBrite_IAB_Zone_Title_Color_Processed +
            '&text_color=' + AdBrite_IAB_Zone_Text_Color_Processed +
            '&background_color=' + AdBrite_IAB_Zone_Background_Color_Processed +
            '&border_color=' + AdBrite_IAB_Zone_Border_Color_Processed +
	    '&zs='+
            '&width=468' +
            '&height=60';


            document.write('<iframe scrolling="no" frameborder="0" width=468 height=60 src=' + AdBrite_IAB_Iframe_URL + '></iframe>');