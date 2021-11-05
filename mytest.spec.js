describe('First Code', function(){

        it('The URL',function(){
            // URL of your wrbsite //
            cy.visit('https://www.npmjs.com/')

        })
        it('Open NPM Website', function(){
            
            // cy.get('#ac-gn-link-search').click()
            // //Click on iphone//
            // // cy.get('#ac-globalnav > div > ul.ac-gn-list > li.ac-gn-item.ac-gn-item-menu.ac-gn-iphone > a').click()
            // cy.get('#ac-gn-searchform-input').type('Iphone 12 red\n')
            // //Click on iphone 12//
            // cy.get('#chapternav > div > ul > li.chapternav-item.chapternav-item-iphone-12.control > a > figure').click()
            // //Click on tech-spec//
            // cy.get('#ac-localnav > div > div.ac-ln-content > div.ac-ln-menu > div.ac-ln-menu-tray > ul > li:nth-child(3) > a').click()

//             cy.get('#search > div > div > input').type('LambdaTest')
            cy.get('#search >').type('LambdaTest')

            cy.get('#search > button').click()
            cy.get('#main > div.a9b7335e.bb.b--black-10 > div').click()
            cy.get('#main > div._23fffac0.w-100.mw9.ph5-ns.ph3-l.ph1-m.mh3-ns.center.center-ns.flex.flex-column.flex-row-l.justify-between > div > section:nth-child(1) > div._0d2164ff > div.bea55649.flex.flex-row.flex-wrap.items-end.pr3 > a > h3').click()
            cy.get('#package-tab-dependencies').click()

        });

});
