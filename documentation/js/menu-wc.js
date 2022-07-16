'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">pizza-fresh-server documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-d3fef38c9601b32109043c9e40b28ab35917247f9ec24609e47977b323928a4f5eb063b6ce322427677946a3b0f90308a27e54cd25e60ba1f5871956a0480a48"' : 'data-target="#xs-controllers-links-module-AppModule-d3fef38c9601b32109043c9e40b28ab35917247f9ec24609e47977b323928a4f5eb063b6ce322427677946a3b0f90308a27e54cd25e60ba1f5871956a0480a48"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d3fef38c9601b32109043c9e40b28ab35917247f9ec24609e47977b323928a4f5eb063b6ce322427677946a3b0f90308a27e54cd25e60ba1f5871956a0480a48"' :
                                            'id="xs-controllers-links-module-AppModule-d3fef38c9601b32109043c9e40b28ab35917247f9ec24609e47977b323928a4f5eb063b6ce322427677946a3b0f90308a27e54cd25e60ba1f5871956a0480a48"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-d3fef38c9601b32109043c9e40b28ab35917247f9ec24609e47977b323928a4f5eb063b6ce322427677946a3b0f90308a27e54cd25e60ba1f5871956a0480a48"' : 'data-target="#xs-injectables-links-module-AppModule-d3fef38c9601b32109043c9e40b28ab35917247f9ec24609e47977b323928a4f5eb063b6ce322427677946a3b0f90308a27e54cd25e60ba1f5871956a0480a48"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d3fef38c9601b32109043c9e40b28ab35917247f9ec24609e47977b323928a4f5eb063b6ce322427677946a3b0f90308a27e54cd25e60ba1f5871956a0480a48"' :
                                        'id="xs-injectables-links-module-AppModule-d3fef38c9601b32109043c9e40b28ab35917247f9ec24609e47977b323928a4f5eb063b6ce322427677946a3b0f90308a27e54cd25e60ba1f5871956a0480a48"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-28905eef1cb07751ca18179d6ccf04fe424a23013b752562c59384c44ffb73300ce70f2c8c13eb5763394e88f535e8eac773c7d0bf61a87a9775c288a9714233"' : 'data-target="#xs-controllers-links-module-AuthModule-28905eef1cb07751ca18179d6ccf04fe424a23013b752562c59384c44ffb73300ce70f2c8c13eb5763394e88f535e8eac773c7d0bf61a87a9775c288a9714233"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-28905eef1cb07751ca18179d6ccf04fe424a23013b752562c59384c44ffb73300ce70f2c8c13eb5763394e88f535e8eac773c7d0bf61a87a9775c288a9714233"' :
                                            'id="xs-controllers-links-module-AuthModule-28905eef1cb07751ca18179d6ccf04fe424a23013b752562c59384c44ffb73300ce70f2c8c13eb5763394e88f535e8eac773c7d0bf61a87a9775c288a9714233"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-28905eef1cb07751ca18179d6ccf04fe424a23013b752562c59384c44ffb73300ce70f2c8c13eb5763394e88f535e8eac773c7d0bf61a87a9775c288a9714233"' : 'data-target="#xs-injectables-links-module-AuthModule-28905eef1cb07751ca18179d6ccf04fe424a23013b752562c59384c44ffb73300ce70f2c8c13eb5763394e88f535e8eac773c7d0bf61a87a9775c288a9714233"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-28905eef1cb07751ca18179d6ccf04fe424a23013b752562c59384c44ffb73300ce70f2c8c13eb5763394e88f535e8eac773c7d0bf61a87a9775c288a9714233"' :
                                        'id="xs-injectables-links-module-AuthModule-28905eef1cb07751ca18179d6ccf04fe424a23013b752562c59384c44ffb73300ce70f2c8c13eb5763394e88f535e8eac773c7d0bf61a87a9775c288a9714233"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CategoryModule-48265521ef2a2d2a4aa5c3ce9032f656009a71e3430fa7413130f290e55386569f3c50958fe25d488f2f81d44a79a15c9e399b350d8b9afb9aa9ecf33e6c42f2"' : 'data-target="#xs-controllers-links-module-CategoryModule-48265521ef2a2d2a4aa5c3ce9032f656009a71e3430fa7413130f290e55386569f3c50958fe25d488f2f81d44a79a15c9e399b350d8b9afb9aa9ecf33e6c42f2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoryModule-48265521ef2a2d2a4aa5c3ce9032f656009a71e3430fa7413130f290e55386569f3c50958fe25d488f2f81d44a79a15c9e399b350d8b9afb9aa9ecf33e6c42f2"' :
                                            'id="xs-controllers-links-module-CategoryModule-48265521ef2a2d2a4aa5c3ce9032f656009a71e3430fa7413130f290e55386569f3c50958fe25d488f2f81d44a79a15c9e399b350d8b9afb9aa9ecf33e6c42f2"' }>
                                            <li class="link">
                                                <a href="controllers/CategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CategoryModule-48265521ef2a2d2a4aa5c3ce9032f656009a71e3430fa7413130f290e55386569f3c50958fe25d488f2f81d44a79a15c9e399b350d8b9afb9aa9ecf33e6c42f2"' : 'data-target="#xs-injectables-links-module-CategoryModule-48265521ef2a2d2a4aa5c3ce9032f656009a71e3430fa7413130f290e55386569f3c50958fe25d488f2f81d44a79a15c9e399b350d8b9afb9aa9ecf33e6c42f2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoryModule-48265521ef2a2d2a4aa5c3ce9032f656009a71e3430fa7413130f290e55386569f3c50958fe25d488f2f81d44a79a15c9e399b350d8b9afb9aa9ecf33e6c42f2"' :
                                        'id="xs-injectables-links-module-CategoryModule-48265521ef2a2d2a4aa5c3ce9032f656009a71e3430fa7413130f290e55386569f3c50958fe25d488f2f81d44a79a15c9e399b350d8b9afb9aa9ecf33e6c42f2"' }>
                                        <li class="link">
                                            <a href="injectables/CategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtAdmOnlyStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtAdmOnlyStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OrderModule-ff67b13b76569d29214ff10d06eeca3b0d71ab8148027657ade5751ea1e4dee5c14f95870434a59607221e8b3be73c397dea28b3b123e29260965fb2b3e5ca03"' : 'data-target="#xs-controllers-links-module-OrderModule-ff67b13b76569d29214ff10d06eeca3b0d71ab8148027657ade5751ea1e4dee5c14f95870434a59607221e8b3be73c397dea28b3b123e29260965fb2b3e5ca03"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderModule-ff67b13b76569d29214ff10d06eeca3b0d71ab8148027657ade5751ea1e4dee5c14f95870434a59607221e8b3be73c397dea28b3b123e29260965fb2b3e5ca03"' :
                                            'id="xs-controllers-links-module-OrderModule-ff67b13b76569d29214ff10d06eeca3b0d71ab8148027657ade5751ea1e4dee5c14f95870434a59607221e8b3be73c397dea28b3b123e29260965fb2b3e5ca03"' }>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OrderModule-ff67b13b76569d29214ff10d06eeca3b0d71ab8148027657ade5751ea1e4dee5c14f95870434a59607221e8b3be73c397dea28b3b123e29260965fb2b3e5ca03"' : 'data-target="#xs-injectables-links-module-OrderModule-ff67b13b76569d29214ff10d06eeca3b0d71ab8148027657ade5751ea1e4dee5c14f95870434a59607221e8b3be73c397dea28b3b123e29260965fb2b3e5ca03"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-ff67b13b76569d29214ff10d06eeca3b0d71ab8148027657ade5751ea1e4dee5c14f95870434a59607221e8b3be73c397dea28b3b123e29260965fb2b3e5ca03"' :
                                        'id="xs-injectables-links-module-OrderModule-ff67b13b76569d29214ff10d06eeca3b0d71ab8148027657ade5751ea1e4dee5c14f95870434a59607221e8b3be73c397dea28b3b123e29260965fb2b3e5ca03"' }>
                                        <li class="link">
                                            <a href="injectables/JwtAdmOnlyStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtAdmOnlyStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' : 'data-target="#xs-injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' :
                                        'id="xs-injectables-links-module-PrismaModule-b26166f92cfad849b117ab7a0966ae4955fe54c993ba0e2bce18e8660576c78b61e87dfe1d30b6407977f484c8c6f333193368bb31119c8d03443fbbe7bbe7ad"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductModule-4dc60ecdda89b031a60329604f99080ca7ebfcd061c4d42221b7484fba7d9bde151d2c8e4b58a887e24f39afac2783ea152f8205ab2f8f80a21541b6622c59fd"' : 'data-target="#xs-controllers-links-module-ProductModule-4dc60ecdda89b031a60329604f99080ca7ebfcd061c4d42221b7484fba7d9bde151d2c8e4b58a887e24f39afac2783ea152f8205ab2f8f80a21541b6622c59fd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-4dc60ecdda89b031a60329604f99080ca7ebfcd061c4d42221b7484fba7d9bde151d2c8e4b58a887e24f39afac2783ea152f8205ab2f8f80a21541b6622c59fd"' :
                                            'id="xs-controllers-links-module-ProductModule-4dc60ecdda89b031a60329604f99080ca7ebfcd061c4d42221b7484fba7d9bde151d2c8e4b58a887e24f39afac2783ea152f8205ab2f8f80a21541b6622c59fd"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductModule-4dc60ecdda89b031a60329604f99080ca7ebfcd061c4d42221b7484fba7d9bde151d2c8e4b58a887e24f39afac2783ea152f8205ab2f8f80a21541b6622c59fd"' : 'data-target="#xs-injectables-links-module-ProductModule-4dc60ecdda89b031a60329604f99080ca7ebfcd061c4d42221b7484fba7d9bde151d2c8e4b58a887e24f39afac2783ea152f8205ab2f8f80a21541b6622c59fd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-4dc60ecdda89b031a60329604f99080ca7ebfcd061c4d42221b7484fba7d9bde151d2c8e4b58a887e24f39afac2783ea152f8205ab2f8f80a21541b6622c59fd"' :
                                        'id="xs-injectables-links-module-ProductModule-4dc60ecdda89b031a60329604f99080ca7ebfcd061c4d42221b7484fba7d9bde151d2c8e4b58a887e24f39afac2783ea152f8205ab2f8f80a21541b6622c59fd"' }>
                                        <li class="link">
                                            <a href="injectables/JwtAdmOnlyStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtAdmOnlyStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TableModule.html" data-type="entity-link" >TableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TableModule-b1054b0f4d8cb7a9f5c16579044f5997ffeb5e70bcb7e8e8227ed18d060aa7d8d91ef8a4dc40bbb68c738a1cc36b0ad52c6554534b39c84a4bf7408af081b4e8"' : 'data-target="#xs-controllers-links-module-TableModule-b1054b0f4d8cb7a9f5c16579044f5997ffeb5e70bcb7e8e8227ed18d060aa7d8d91ef8a4dc40bbb68c738a1cc36b0ad52c6554534b39c84a4bf7408af081b4e8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TableModule-b1054b0f4d8cb7a9f5c16579044f5997ffeb5e70bcb7e8e8227ed18d060aa7d8d91ef8a4dc40bbb68c738a1cc36b0ad52c6554534b39c84a4bf7408af081b4e8"' :
                                            'id="xs-controllers-links-module-TableModule-b1054b0f4d8cb7a9f5c16579044f5997ffeb5e70bcb7e8e8227ed18d060aa7d8d91ef8a4dc40bbb68c738a1cc36b0ad52c6554534b39c84a4bf7408af081b4e8"' }>
                                            <li class="link">
                                                <a href="controllers/TableController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TableModule-b1054b0f4d8cb7a9f5c16579044f5997ffeb5e70bcb7e8e8227ed18d060aa7d8d91ef8a4dc40bbb68c738a1cc36b0ad52c6554534b39c84a4bf7408af081b4e8"' : 'data-target="#xs-injectables-links-module-TableModule-b1054b0f4d8cb7a9f5c16579044f5997ffeb5e70bcb7e8e8227ed18d060aa7d8d91ef8a4dc40bbb68c738a1cc36b0ad52c6554534b39c84a4bf7408af081b4e8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TableModule-b1054b0f4d8cb7a9f5c16579044f5997ffeb5e70bcb7e8e8227ed18d060aa7d8d91ef8a4dc40bbb68c738a1cc36b0ad52c6554534b39c84a4bf7408af081b4e8"' :
                                        'id="xs-injectables-links-module-TableModule-b1054b0f4d8cb7a9f5c16579044f5997ffeb5e70bcb7e8e8227ed18d060aa7d8d91ef8a4dc40bbb68c738a1cc36b0ad52c6554534b39c84a4bf7408af081b4e8"' }>
                                        <li class="link">
                                            <a href="injectables/JwtAdmOnlyStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtAdmOnlyStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TableService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-2c3227a5fbf5b057ed8db824e5632adb073f48240049ffc8eebe61bcede4cfee0ce9e21fd1be769a298dad27a064351a5aa34b68e1ae998a6cc5de3dafdb2a08"' : 'data-target="#xs-controllers-links-module-UserModule-2c3227a5fbf5b057ed8db824e5632adb073f48240049ffc8eebe61bcede4cfee0ce9e21fd1be769a298dad27a064351a5aa34b68e1ae998a6cc5de3dafdb2a08"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-2c3227a5fbf5b057ed8db824e5632adb073f48240049ffc8eebe61bcede4cfee0ce9e21fd1be769a298dad27a064351a5aa34b68e1ae998a6cc5de3dafdb2a08"' :
                                            'id="xs-controllers-links-module-UserModule-2c3227a5fbf5b057ed8db824e5632adb073f48240049ffc8eebe61bcede4cfee0ce9e21fd1be769a298dad27a064351a5aa34b68e1ae998a6cc5de3dafdb2a08"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-2c3227a5fbf5b057ed8db824e5632adb073f48240049ffc8eebe61bcede4cfee0ce9e21fd1be769a298dad27a064351a5aa34b68e1ae998a6cc5de3dafdb2a08"' : 'data-target="#xs-injectables-links-module-UserModule-2c3227a5fbf5b057ed8db824e5632adb073f48240049ffc8eebe61bcede4cfee0ce9e21fd1be769a298dad27a064351a5aa34b68e1ae998a6cc5de3dafdb2a08"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-2c3227a5fbf5b057ed8db824e5632adb073f48240049ffc8eebe61bcede4cfee0ce9e21fd1be769a298dad27a064351a5aa34b68e1ae998a6cc5de3dafdb2a08"' :
                                        'id="xs-injectables-links-module-UserModule-2c3227a5fbf5b057ed8db824e5632adb073f48240049ffc8eebe61bcede4cfee0ce9e21fd1be769a298dad27a064351a5aa34b68e1ae998a6cc5de3dafdb2a08"' }>
                                        <li class="link">
                                            <a href="injectables/JwtAdmOnlyStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtAdmOnlyStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoryController.html" data-type="entity-link" >CategoryController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/OrderController.html" data-type="entity-link" >OrderController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductController.html" data-type="entity-link" >ProductController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TableController.html" data-type="entity-link" >TableController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableDto.html" data-type="entity-link" >CreateTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FavoriteProductDto.html" data-type="entity-link" >FavoriteProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderProducts.html" data-type="entity-link" >OrderProducts</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderProductsDto.html" data-type="entity-link" >OrderProductsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/Table.html" data-type="entity-link" >Table</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTableDto.html" data-type="entity-link" >UpdateTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAdmOnlyStrategy.html" data-type="entity-link" >JwtAdmOnlyStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableService.html" data-type="entity-link" >TableService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});