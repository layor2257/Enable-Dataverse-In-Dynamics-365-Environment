function turnOnRelevanceSearch(state) {

    Xrm.WebApi.retrieveRecord('organization', Xrm.Utility.getGlobalContext().organizationSettings.organizationId).then(org => {

        //debugger ;

        console.log(org.isexternalsearchindexenabled);

        Xrm.WebApi.updateRecord('organization', Xrm.Utility.getGlobalContext().organizationSettings.organizationId, {

            'isexternalsearchindexenabled': state

        }).then(

            () => {

                console.log("success")

            },

            (e) => {

                console.log("failed with error:" + e);

            });

    });

}

 

function turnOnNewSearchUI(state) {

    Xrm.WebApi.retrieveRecord('organization', Xrm.Utility.getGlobalContext().organizationSettings.organizationId).then(org => {

        //debugger ;

        console.log(org.newsearchexperienceenabled);

 

        Xrm.WebApi.updateRecord('organization', Xrm.Utility.getGlobalContext().organizationSettings.organizationId, {

            'newsearchexperienceenabled': state

        }).then(

            () => {

                console.log("success")

            },

            (e) => {

                console.log("failed with error:" + e);

            });

    });

}