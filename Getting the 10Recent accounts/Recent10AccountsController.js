({
	doInit : function(cmp, event, helper) {
        //getting accounts from the apex controller
		var action = cmp.get("c.getAccounts");
        console.log('calling doInit');
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (cmp.isValid() && state === "SUCCESS") {
                console.log('getting cases');
                cmp.set("v.accounts", response.getReturnValue());
            }
    
        });
         $A.enqueueAction(action);
	}

})