/*
 * This file is part of justoverclock/flarum-ext-infocards.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { extend } from 'flarum/common/extend';
import app from 'flarum/app';
import IndexPage from 'flarum/components/IndexPage';
import username from 'flarum/common/helpers/username';
import formatNumber from 'flarum/utils/formatNumber';
import listItems from 'flarum/helpers/listItems';
import AvatarEditor from 'flarum/components/AvatarEditor';

app.initializers.add('justoverclock/flarum-ext-infocards', () => {
  extend(IndexPage.prototype, 'view', function (vdom) {
    const user = app.session.user;
    if (app.session.user)
      if (vdom.children && vdom.children.splice) {
        const insert = m('div', { class: 'containersocial' }, [
          m('div', { class: 'card card-2' }, [
            m('h3', { class: 'textone' }, app.translator.trans('flarum-ext-infocards.forum.welcome_back')),
            m('div', { class: 'avataric' }, AvatarEditor.component({ user })),
            m('p', { class: 'textone' }, m('strong', username(user))),
            m('div', { class: 'icocont' }, m('div', { class: 'iconbadge' }, listItems(user.badges().toArray()))),
          ]),
          m('div', { class: 'card card-2' }, [
            m('h3', { class: 'fontic2' }, app.translator.trans('flarum-ext-infocards.forum.postuwrote')),
            m('p', app.translator.trans('flarum-ext-infocards.forum.totalpost')),
            m('div', { class: 'numbercount' }, m('span', formatNumber(user.commentCount()))),
          ]),
          m('div', { class: 'card card-2' }, [
            m('h3', { class: 'fontic3' }, app.translator.trans('flarum-ext-infocards.forum.viscounter')),
            m('p', app.translator.trans('flarum-ext-infocards.forum.wasviewed')),
            m('div', { class: 'numbercount' }, m('span', { id: 'count' })),
          ]),
        ]);
        vdom.children.splice(1, 0, insert);
      }
  });
  extend(IndexPage.prototype, 'oncreate', function () {
    const countVisit = document.getElementById('count');
    const apik = app.forum.attribute('ApiKey');
    updateVisitCount();

    function updateVisitCount() {
      fetch(apik)
        .then((res) => res.json())
        .then((res) => {
          countVisit.innerHTML = res.value;
        });
    }
  });
});
