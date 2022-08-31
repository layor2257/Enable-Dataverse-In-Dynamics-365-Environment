# Enable-Dataverse-In-Dynamics-365-Environment
Using the Developer tool console, this IaaC can be used to enable dataverse (connector) in an environment

### STEPS
- Open the Support Instance and navigate to Advanced Settings.
- Open the Browser Console: F12 or Ctrl+Shift+I depending on the browser.
- Paste the Turn dataverse.js script in the Console section:
- Run the script(enter)
- Refresh the window
- execute the Confirm false.js script
- execute the Confirm true.js script
- Observe the response as it should be like this:

![image](https://user-images.githubusercontent.com/49678841/187694544-eb0b7093-54fb-44a6-aa31-e55eaa528c78.png)

- Validate that the settings were set to true by running the API call: orgurl/api/data/v9.1/organizations?$select=isexternalsearchindexenabled,newsearchexperienceenabled

![image](https://user-images.githubusercontent.com/49678841/187694672-e6b521f5-982b-4ce7-9b3f-f7e2d00c8796.png)
