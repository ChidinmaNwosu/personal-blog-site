#Task
You will create and host a simple single-page website outlining your goals for the next 2 years in the tech field.
The website should be visually appealing, mobile-friendly, and utilize HTML, CSS and JavaScript only.
Each required element should have a specified data-testid attribute for easy identification and testing.

##Requirements:
1. **Languages:** Only HTML, CSS and JavaScript allowed for this stage.
2. **Responsiveness:** The website must be responsive and function well on all devices (desktop, tablet, mobile).
3. **Images:** All images used on the website must have natural dimensions (width and height specified in the image file itself). Websites with images that don't have natural dimensions will be automatically disqualified.
4. **Required Elements:** Each required element on the website (Slack name, slack profile picture, links) should have a data-test-id attribute assigned for easy testing purposes.
   a).Slack Name:Display your Slack Display Name.
   b).Attribute: data-testid="slackDisplayName"
   c).Current Time in UTC:Display the current time in UTC.
   d).Attribute: data-testid="currentTimeUTC"
   e).Current Day of the week (e.g. Monday, friday):Display the current Day of the week.
   f).Attribute: data-testid="currentDay"
   g).Slack Email:Display your Slack Email.
   h).Attribute: data-testid="slackEmail"
   i).Slack profile pictureDisplay your Slack Profile Picture
   j).Attribute: data-testid="slackProfilePicture"
   
**Dimensions:** The image must have natural dimensions (width and height specified in the image file itself) and added to the page in its original size (natural width and natural height).

Add a link to hng.tech/learn.Attribute: data-testid="hngLink"
Add a link to keyword.dogAttribute: data-testid="keywordLink"
Add a link to scrapeanyweb.siteAttribute: data-testid="scrapeanywebLink"

**Acceptance Criteria:**
-Content: The website should clearly outline your tech goals for the next 2 years.
-Visuals: The website should be visually appealing and well-organized.
-Functionality:All links should function properly and direct users to the specified websites (hng.tech/learn, keyword.dog, scrapeanyweb.site).
The website should be fully responsive and adjust to different screen sizes.

**Code Quality:** The code should be well-structured, indented, and easy to read.
Each required element should have a unique data-testid attribute assigned.

**Accuracy:** Your Slack name should correspond to the actual data.
Your slack profile picture dimension must be in its original size (Make sure the image have natural dimensions).
Data-attributes adherence: Every specified detail on the page should correctly have the data-testid attribute as indicated above, ensuring easy identification during any potential testing.
