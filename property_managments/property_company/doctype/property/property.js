// Copyright (c) 2023, labeeb@gmail.com and contributors
// For license information, please see license.txt

frappe.ui.form.on('Property', {
	 refresh: function(frm) {
		frm.set_query("territory", function() {
			return {
				"filters": {
					"is_group": 0
				}
			};
		});

	}
});
