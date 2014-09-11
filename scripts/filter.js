app
.filter('appNameSearch', function() {
        return function(input, query) {
            if (query == undefined || query.length == 0 || !input || input.length == 0) { return input; }

            query = query.toLowerCase();
            var out = [],
                len = input.length,
								itemName,
                i = 0;

            for(; i < len; i++) {
                itemName = input[i].firstName + " " + input[i].middleInitial + " "+ input[i].surname;
                //alert(itemName);
                if(itemName.toLowerCase().indexOf(query) == query.indexOf(query)) {
                    out.push(input[i]);
                }
            }
            return out;
        }
    })
.filter('appCategoryFilter', function() {
        return function(input, query) {
            if (query == undefined || query.length == 0 || !input || input.length == 0) { return input; }

            query = query.toLowerCase();
            var out = [],
                len = input.length,
								appCategory
                i = 0;

            for(; i < len; i++) {
                appCategory = input[i].id;
                if(appCategory == query) {
                    out.push(input[i]);
                }
            }
            return out;
        }
    })