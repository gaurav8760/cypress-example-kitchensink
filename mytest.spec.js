describe('First Code', function(){

        it('The URL',function(){
            // URL of your wrbsite //
            cy.visit('https://www.npmjs.com/')

        })
        it('Open NPM Website', function(){

            cy.title().should('eq', 'Gaurav')

            // cy.get('#ac-gn-link-search').click()
            // //Click on iphone//
            // // cy.get('#ac-globalnav > div > ul.ac-gn-list > li.ac-gn-item.ac-gn-item-menu.ac-gn-iphone > a').click()
            // cy.get('#ac-gn-searchform-input').type('Iphone 12 red\n')
            // //Click on iphone 12//
            // cy.get('#chapternav > div > ul > li.chapternav-item.chapternav-item-iphone-12.control > a > figure').click()
            // //Click on tech-spec//
            // cy.get('#ac-localnav > div > div.ac-ln-content > div.ac-ln-menu > div.ac-ln-menu-tray > ul > li:nth-child(3) > a').click()
            // cy.title().should('eq', '@lambdatest/node-tunnel  -  npm')
            // cy.get('#search > div > div > input').type('LambdaTest')
            // cy.get('#app > div > div.flex.flex-column.vh-100 > header > div.e7070742.pv3-ns.ph1-ns.bg-white > div > span._99e3854f.f6.fw4.link.dn.dib-ns.tl.dim.mr4.nowrap').click()
            // cy.wait(2000)
            // cy.get('#search > button').click()
            // // cy.wait(10000)
            // cy.get('#main > div.a9b7335e.bb.b--black-10 > div').click()
            // cy.get('#main > div._23fffac0.w-100.mw9.ph5-ns.ph3-l.ph1-m.mh3-ns.center.center-ns.flex.flex-column.flex-row-l.justify-between > div > section:nth-child(1) > div._0d2164ff > div.bea55649.flex.flex-row.flex-wrap.items-end.pr3 > a > h3').click()
            // cy.get('#package-tab-dependencies').click()
            // cy.title().should('eq', '@lambdatest/node-tunnel  -  npm')

        });

});
