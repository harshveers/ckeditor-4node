CKEDITOR.plugins.add( 'mathexp', {
    icons: 'mathexp',
    init: function( editor ) {
        editor.addCommand( 'insertMathExp', {
		    exec: function( editor ) {
		    	editor.config.insertMathExp();
		    }
		});
		editor.ui.addButton( 'Insert Mathematical Expressions', {
		    label: 'Insert Mathematical Expressions',
		    command: 'insertMathExp',
		    toolbar: 'insert'
		});
    }
});