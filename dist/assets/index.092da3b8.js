(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
  new MutationObserver((n) => {
    for (const a of n)
      if (a.type === 'childList')
        for (const s of a.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(n) {
    const a = {};
    return (
      n.integrity && (a.integrity = n.integrity),
      n.referrerpolicy && (a.referrerPolicy = n.referrerpolicy),
      n.crossorigin === 'use-credentials'
        ? (a.credentials = 'include')
        : n.crossorigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    );
  }
  function r(n) {
    if (n.ep) return;
    n.ep = !0;
    const a = o(n);
    fetch(n.href, a);
  }
})();
(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const n of r)
      if (n.type === 'childList')
        for (const a of n.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && o(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const n = {};
    return (
      r.integrity && (n.integrity = r.integrity),
      r.referrerpolicy && (n.referrerPolicy = r.referrerpolicy),
      r.crossorigin === 'use-credentials'
        ? (n.credentials = 'include')
        : r.crossorigin === 'anonymous'
        ? (n.credentials = 'omit')
        : (n.credentials = 'same-origin'),
      n
    );
  }
  function o(r) {
    if (r.ep) return;
    r.ep = !0;
    const n = t(r);
    fetch(r.href, n);
  }
})();
(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const n of r)
      if (n.type === 'childList')
        for (const a of n.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && o(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const n = {};
    return (
      r.integrity && (n.integrity = r.integrity),
      r.referrerpolicy && (n.referrerPolicy = r.referrerpolicy),
      r.crossorigin === 'use-credentials'
        ? (n.credentials = 'include')
        : r.crossorigin === 'anonymous'
        ? (n.credentials = 'omit')
        : (n.credentials = 'same-origin'),
      n
    );
  }
  function o(r) {
    if (r.ep) return;
    r.ep = !0;
    const n = t(r);
    fetch(r.href, n);
  }
})();
(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const n of r)
      if (n.type === 'childList')
        for (const a of n.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && o(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const n = {};
    return (
      r.integrity && (n.integrity = r.integrity),
      r.referrerpolicy && (n.referrerPolicy = r.referrerpolicy),
      r.crossorigin === 'use-credentials'
        ? (n.credentials = 'include')
        : r.crossorigin === 'anonymous'
        ? (n.credentials = 'omit')
        : (n.credentials = 'same-origin'),
      n
    );
  }
  function o(r) {
    if (r.ep) return;
    r.ep = !0;
    const n = t(r);
    fetch(r.href, n);
  }
})();
(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const n of r)
      if (n.type === 'childList')
        for (const a of n.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && o(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const n = {};
    return (
      r.integrity && (n.integrity = r.integrity),
      r.referrerpolicy && (n.referrerPolicy = r.referrerpolicy),
      r.crossorigin === 'use-credentials'
        ? (n.credentials = 'include')
        : r.crossorigin === 'anonymous'
        ? (n.credentials = 'omit')
        : (n.credentials = 'same-origin'),
      n
    );
  }
  function o(r) {
    if (r.ep) return;
    r.ep = !0;
    const n = t(r);
    fetch(r.href, n);
  }
})();
const D = new URL('https://nf-api.onrender.com/api/v1'),
  c = D.toString(),
  u = (e) => {
    try {
      return JSON.parse(localStorage.getItem(e));
    } catch {
      return null;
    }
  },
  $ = (e) => localStorage.removeItem(e),
  F = (e, t) => {
    localStorage.setItem(e, JSON.stringify(t));
  },
  l = (e) => {
    const t = u('token'),
      o = {};
    return (
      e && (o['Content-Type'] = e), t && (o.Authorization = `Bearer ${t}`), o
    );
  };
async function N(e, t) {
  const o = await fetch(`${c}/social/auth/login`, {
    method: 'post',
    body: JSON.stringify({ email: e, password: t }),
    headers: l('application/json'),
  });
  if (o.ok) {
    const r = await o.json();
    return F('token', r.accessToken), delete r.accessToken, F('profile', r), r;
  }
  throw new Error(o.statusText);
}
function _() {
  $('token'), $('profile');
}
async function B(e, t, o, r) {
  const n = await fetch(`${c}/social/auth/register`, {
    method: 'post',
    body: JSON.stringify({ name: e, email: t, password: o, avatar: r }),
    headers: l('application/json'),
  });
  if (n.ok) return await n.json();
  throw new Error(n.statusText);
}
const y = () => Boolean(u('token')),
  w = () => u('profile');
async function C(e, t, o, r) {
  const n = await fetch(`${c}/social/posts/`, {
    method: 'post',
    body: JSON.stringify({ title: e, body: t, media: o, tags: r }),
    headers: l('application/json'),
  });
  if (n.ok) return await n.json();
  throw new Error(n.statusText);
}
async function J(e = 20, t = 0) {
  const o = await fetch(
    `${c}/social/posts?limit=${e}&offset=${t}&_reactions=true&_author=true&_comments=true`,
    { headers: l() }
  );
  if (o.ok) return await o.json();
  throw new Error(o.statusText);
}
async function M(e) {
  const t = await fetch(
    `${c}/social/posts/${e}?_reactions=true&_author=true&_comments=true`,
    { headers: l() }
  );
  if (t.ok) return await t.json();
  throw new Error(t.statusText);
}
async function K(e, t, o, r, n) {
  const { name: a } = w(),
    s = await fetch(`${c}/social/posts/${e}`, {
      method: 'put',
      body: JSON.stringify({ title: t, body: o, media: r, tags: n, owner: a }),
      headers: l('application/json'),
    });
  if (s.ok) return await s.json();
  throw new Error(s.statusText);
}
async function R(e) {
  const t = await fetch(`${c}/social/posts/${e}`, {
    method: 'delete',
    headers: l(),
  });
  if (t.ok) return await t.json();
  throw new Error(t.statusText);
}
async function U(e, t) {
  const o = await fetch(`${c}/social/posts/${e}/react/${t}`, {
    headers: l(),
    method: 'put',
  });
  if (o.ok) return await o.json();
  throw new Error(o.statusText);
}
async function Z(e, t, o) {
  const r = await fetch(`${c}/social/posts/${e}/comment`, {
    method: 'post',
    body: JSON.stringify({ body: t, replyToId: o }),
    headers: l('application/json'),
  });
  if (r.ok) return await r.json();
  throw new Error(r.statusText);
}
async function z() {
  const e = await fetch(`${c}/social/profiles`, { headers: l() });
  if (e.ok) return await e.json();
  throw new Error(e.statusText);
}
async function H(e) {
  const t = await fetch(
    `${c}/social/profiles/${e}?&_followers=true&_posts=true&_following=true`,
    { headers: l() }
  );
  if (t.ok) return await t.json();
  throw new Error(t.statusText);
}
const h = () => {
    const e = new URL(window.location);
    return Object.fromEntries(e.searchParams);
  },
  V = (e) => {
    const t = { ...h(), ...e },
      o = new URLSearchParams(t);
    window.location.search = o.toString();
  },
  i = (e = '404') => {
    const t = document.querySelector(`template#${e}`);
    if (t) return t.content.cloneNode(!0);
    throw new Error(`Template #${e} not found`);
  },
  G = (e) => {
    const t = u('profile'),
      o = i('postActions'),
      r = e.author && t.name === e.author.name,
      { postId: n } = h(),
      a = n == e.id,
      s = o.querySelector('a[data-action=view]'),
      m = o.querySelector('button[data-action=delete]');
    return (
      a ? s.remove() : (s.href = `/?view=post&postId=${e.id}`),
      r
        ? m.addEventListener('click', async () => {
            await R(e.id), (location.href = '/');
          })
        : m.remove(),
      o
    );
  };
function j(e) {
  for (; e.firstChild; ) e.removeChild(e.firstChild);
}
const Q = (e) => {
    if (e && e.length) {
      const t = i('commentsTag');
      return (
        (t.querySelector('.badge').innerText = `${e.length} comment${
          e.length > 1 ? 's' : ''
        }`),
        t
      );
    }
    return `\r
`;
  },
  v = (e) => {
    const t = document.createElement('a');
    t.classList.add('profile', 'thumbnail'),
      (t.href = `/?view=profile&name=${e.name}`);
    const o = new Image();
    return (
      (o.src =
        e.avatar ||
        'https://cdn.discordapp.com/attachments/931268688412299274/1026475050578231376/no-user-image-icon-0.jpg'),
      (o.alt = e.name),
      o.classList.add('rounded-circle', 'avatar', 'border'),
      (t.title = `${e.name}'s Profile`),
      t.append(o),
      t
    );
  },
  W = (e) => {
    if (e.tags) {
      const t = document.createElement('span');
      t.classList.add('post-tags');
      const o = e.tags.map((r) => {
        const n = i('postTag');
        return (n.querySelector('.badge').innerText = r), n;
      });
      return t.append(...o), t;
    }
    return `\r
`;
  },
  X = (e) => {
    const t = i('postHeader');
    (t.querySelector('.card-header').href = `/?view=post&postId=${e.id}`),
      (t.querySelector('b').innerText = e.title),
      e.body
        ? (t.querySelector('span').innerText = e.body)
        : t.querySelector('span').remove();
    const o = Q(e.comments),
      r = W(e),
      n = [o, r];
    return (
      e.author && n.push(v(e.author)),
      t.querySelector('.card-header').append(...n),
      t
    );
  },
  Y = (e, t = 'a') => {
    if (e.media) {
      const o = document.createElement(t);
      o.classList.add('card-img');
      const r = new Image();
      return (
        (r.src = e.media),
        (r.alt = e.title),
        r.classList.add('img-fluid', 'w-100'),
        t.toLowerCase() === 'a' &&
          ((o.href = `/?view=post&postId=${e.id}`),
          (o.title = `View ${e.title}`)),
        o.append(r),
        o
      );
    }
    return `\r
`;
  };
function ee() {
  const e = i('postFooter');
  return e.querySelector('.card-footer').append(...arguments), e;
}
const te = [
    '\u{1F600}',
    '\u{1F601}',
    '\u{1F602}',
    '\u{1F923}',
    '\u{1F603}',
    '\u{1F604}',
    '\u{1F605}',
    '\u{1F606}',
    '\u{1F609}',
    '\u{1F60A}',
    '\u{1F60B}',
    '\u{1F60E}',
    '\u{1F60D}',
    '\u{1F618}',
    '\u{1F617}',
    '\u{1F619}',
    '\u{1F61A}',
    '\u263A',
    '\u{1F642}',
    '\u{1F917}',
    '\u{1F914}',
    '\u{1F610}',
    '\u{1F611}',
    '\u{1F636}',
    '\u{1F644}',
    '\u{1F60F}',
    '\u{1F623}',
    '\u{1F625}',
    '\u{1F62E}',
    '\u{1F910}',
    '\u{1F62F}',
    '\u{1F62A}',
    '\u{1F62B}',
    '\u{1F634}',
    '\u{1F60C}',
    '\u{1F913}',
    '\u{1F61B}',
    '\u{1F61C}',
    '\u{1F61D}',
    '\u{1F924}',
    '\u{1F612}',
    '\u{1F613}',
    '\u{1F614}',
    '\u{1F615}',
    '\u{1F643}',
    '\u{1F911}',
    '\u{1F632}',
    '\u2639',
    '\u{1F641}',
    '\u{1F616}',
    '\u{1F61E}',
    '\u{1F61F}',
    '\u{1F624}',
    '\u{1F622}',
    '\u{1F62D}',
    '\u{1F626}',
    '\u{1F627}',
    '\u{1F628}',
    '\u{1F629}',
    '\u{1F62C}',
    '\u{1F630}',
    '\u{1F631}',
    '\u{1F633}',
    '\u{1F635}',
    '\u{1F621}',
    '\u{1F620}',
    '\u{1F607}',
    '\u{1F920}',
    '\u{1F921}',
    '\u{1F925}',
    '\u{1F637}',
    '\u{1F912}',
    '\u{1F915}',
    '\u{1F922}',
    '\u{1F927}',
  ],
  re = (e = []) => te.filter((t) => !e.map((o) => o.symbol).includes(t));
function b() {
  const e = u('token');
  document.body.classList[e ? 'add' : 'remove']('logged-in');
}
async function oe(e) {
  e.preventDefault();
  const t = e.target,
    o = new FormData(t),
    r = o.get('email'),
    n = o.get('password'),
    { name: a } = await N(r, n);
  b(), (location.href = `/?view=profile&name=${a}`);
}
function ne() {
  _(), b(), (window.location.href = '/');
}
async function ae(e) {
  e.preventDefault();
  const t = e.target,
    o = new FormData(t),
    r = o.get('email'),
    n = o.get('name'),
    a = o.get('password'),
    s = o.get('avatar');
  await B(n, r, a, s), await N(r, a), location.reload();
}
async function se(e) {
  const t = e.srcElement,
    o = t.dataset.symbol,
    r = t.dataset.postId;
  r && o && (await U(r, o), location.reload());
}
async function ie(e) {
  e.preventDefault();
  const t = e.target,
    o = new FormData(t).get('body'),
    r = t.dataset.postId,
    n = h().replyToId;
  await Z(r, o, n), t.remove(), location.reload();
}
async function ce(e) {
  const t = await fetch(`${c}/social/profiles/${e}/follow`, {
    headers: l(),
    method: 'put',
  });
  if (t.ok) return await t.json();
  throw new Error(t.statusText);
}
async function le(e) {
  const t = await fetch(`${c}/social/profiles/${e}/unfollow`, {
    headers: l(),
    method: 'put',
  });
  if (t.ok) return await t.json();
  throw new Error(t.statusText);
}
async function ue(e) {
  const t = e.srcElement.dataset.name;
  t && (await ce(t), location.reload());
}
async function de(e) {
  const t = e.srcElement.dataset.name;
  t && (await le(t), location.reload());
}
const me = (e) => {
    const t = i('reactionMenu');
    if (e.reactions && e.reactions.length) {
      const r = e.reactions.sort((n, a) => a.count - n.count).map((n) => pe(n));
      t.querySelector('.reactions').prepend(...r);
    }
    const o = re(e.reactions);
    return (
      t.querySelector('.dropdown-menu').append(...o.map((r) => fe(r, e.id))),
      t.querySelectorAll('[data-reaction]').forEach((r) => {
        r.addEventListener('click', se);
      }),
      t
    );
  },
  pe = ({ symbol: e, count: t, postId: o }) => {
    const r = i('reactionButton');
    return (
      (r.querySelector('.btn').dataset.symbol = e),
      r.querySelector('.btn').prepend(`${e}`),
      (r.querySelector('.badge').innerText = t),
      (r.querySelector('.btn').dataset.postId = o),
      r
    );
  },
  fe = (e, t) => {
    const o = i('reactionOption');
    return (
      (o.querySelector('.dropdown-item').dataset.symbol = e),
      (o.querySelector('.dropdown-item').dataset.postId = t),
      (o.querySelector('.dropdown-item').innerText = e),
      o
    );
  },
  d = (e, t = !1) => {
    const o = i('postThumbnail');
    o.querySelector('.post').id = e.id;
    const r = X(e),
      n = Y(e, t ? 'div' : 'a'),
      a = ee(G(e), me(e)),
      s = [r, n, a];
    return o.querySelector('.thumbnail').append(...s), o;
  };
function ye(e, t) {
  (t.title.value = e.title),
    (t.body.value = e.body),
    (t.media.value = e.media),
    (t.tags.value = e.tags.join(', '));
}
function k(e, t) {
  const o = d(e, !1);
  j(t), t.append(o);
}
const I = (e) => {
    const t = i('postForm'),
      o = t.querySelector('#postForm'),
      r = t.querySelector('[data-action=submit]'),
      n = t.querySelector('#postPreview');
    return (
      e && e.id
        ? (ye(e, o),
          k(e, n),
          (r.querySelector('[data-action=publish]').style.display = 'none'))
        : (r.querySelector('[data-action=update]').style.display = 'none'),
      o.addEventListener('input', () => {
        const a = {
          title: o.title.value,
          body: o.body.value,
          media: o.media.value,
          tags: o.tags.value.split(', '),
        };
        k(a, n);
      }),
      o.addEventListener('submit', async (a) => {
        a.preventDefault();
        const s = new URL(location.href).searchParams.get('postId'),
          m = a.target,
          p = new FormData(m),
          q = p.get('title'),
          L = p.get('body'),
          E = p.get('media'),
          T = p.get('tags').split(', ');
        let g;
        s ? (g = await K(s, q, L, E, T)) : (g = await C(q, L, E, T)),
          (location.href = `/?view=post&postId=${g.id}`);
      }),
      t
    );
  },
  we = (e, t = '') => {
    const { name: o } = w(),
      r = i('comment');
    (r.querySelector('.comment-body').innerText = e.body),
      (r.querySelector('.owner').innerText = e.owner),
      (r.querySelector('.owner').href = `/?view=profile&name=${e.owner}`);
    const n = document.createElement('button');
    return (
      n.classList.add('btn', 'btn-sm', 'btn-success'),
      (n.innerText = 'Reply'),
      n.addEventListener('click', () => {
        V({ replyToId: e.id });
      }),
      r.querySelector('.comment-header').prepend(n),
      o === e.owner && r.querySelector('.comment').classList.add('me'),
      o === t && r.querySelector('.comment').classList.add('op'),
      r
    );
  },
  he = (e) => {
    const t = i('commentForm');
    return (
      (t.querySelector('form').dataset.postId = e),
      t.querySelector('form').addEventListener('submit', ie),
      t
    );
  },
  O = (e) => {
    const t = document.createElement('div');
    if ((t.classList.add('post-comments'), e && e.comments)) {
      const o = e.comments.map((r) => we(r, e.author.name));
      t.append(...o);
    }
    return t.append(he(e.id)), t;
  },
  ge = {
    title: 'Loading...',
    body: '',
    tags: ['please', 'wait'],
    media: '',
    reactions: [{ symbol: '\u231B', count: 1, postId: 0 }],
    comments: [
      {
        body: '',
        replyToId: 0,
        id: 0,
        postId: 0,
        owner: '',
        created: '2022-09-05T19:33:29.154Z',
      },
    ],
    created: '2022-09-05T19:33:29.154Z',
    updated: '2022-09-05T19:33:29.154Z',
    id: 0,
    author: { name: '', email: '', avatar: '/assets/img/avatar.jpeg' },
    _count: { comments: 0, reactions: 0 },
  },
  x = (e = {}) => {
    e = { ...ge, ...e };
    const t = d(e);
    return t.querySelector('.post').classList.add('loader'), t;
  },
  Fe = () => i('postTabs'),
  A = (e) => {
    const t = i('profileButton');
    return (
      (t.querySelector('img').src = e.avatar),
      (t.querySelector('.btn').innerText = e.name),
      (t.querySelector('a').href = `/?view=profile&name=${e.name}`),
      t
    );
  },
  P = (e, t = !1) => {
    const o = document.createElement('div');
    return (
      o.classList.add('post', 'list'), o.append(...e.map((r) => d(r, t))), o
    );
  },
  Se = (e) => {
    if (e && e.followers && e.followers.length) {
      const t = document.createElement('div');
      return (
        t.classList.add('followers'),
        t.append('Followers', ...e.followers.map(v)),
        t
      );
    }
    return `\r
`;
  },
  ve = (e) => {
    if (e.following && e.following.length) {
      const t = document.createElement('div');
      return (
        t.classList.add('following'),
        t.append('Following', ...e.following.map(v)),
        t
      );
    }
    return `\r
`;
  },
  be = (e) => {
    const t = document.createElement('div');
    t.classList.add('profile', 'follows');
    const o = [Se(e), ve(e)];
    return t.append(...o), t;
  },
  qe = (e) => {
    const t = i('profilePagePrivate'),
      { name: o } = w();
    if (
      ((t.querySelector('img.avatar').src = e.avatar),
      (t.querySelector('.profile-name').innerText = e.name),
      (t.querySelector('.profile-email').innerText = e.email),
      t.querySelector('.upper').prepend(be(e)),
      e.posts && e.posts.length)
    ) {
      const r = P(e.posts);
      t.querySelector('.profile-posts').append(r);
    } else {
      const r = document.createElement('div');
      r.classList.add('alert', 'alert-info'),
        (r.innerText = 'There are no posts yet...'),
        t.querySelector('.profile-posts').append(r);
    }
    return (
      e.name !== o
        ? e.followers.find((r) => r.name === o)
          ? (t.querySelector('[data-action=follow]').remove(),
            (t.querySelector('[data-action=unfollow]').dataset.name = e.name),
            t
              .querySelector('[data-action=unfollow]')
              .addEventListener('click', de))
          : (t.querySelector('[data-action=unfollow]').remove(),
            (t.querySelector('[data-action=follow]').dataset.name = e.name),
            t
              .querySelector('[data-action=follow]')
              .addEventListener('click', ue))
        : (t.querySelector('[data-action=follow]').remove(),
          t.querySelector('[data-action=unfollow]').remove()),
      t
    );
  };
function S() {
  const e = document.querySelector('main');
  j(e), e.append(...arguments);
}
const Le = async (e) => {
    const t = document.createElement('div');
    t.classList.add('post', 'page', 'mb-3');
    const o = d(e, !0),
      r = O(e);
    return t.append(o, r), t;
  },
  Ee = async (e) => {
    if (!y()) location.href = '/';
    else {
      const t = w();
      if (e) {
        const o = await M(e);
        if (o.author.name === t.name) {
          const r = Fe(),
            n = d(o),
            a = I(o),
            s = O(o);
          return (
            r.querySelector('#nav-default').append(n, s),
            r.querySelector('#nav-edit').append(a),
            r
          );
        }
        return Le(o);
      }
      return I();
    }
  },
  Te = async (e) => {
    const t = document.createElement('div');
    return (
      t.classList.add('profile', 'list'), t.append(...e.map((o) => A(o))), t
    );
  },
  $e = async (e) => {
    if (!y()) location.href = '/';
    else return qe(await H(e));
  };
function f(e = () => {}, t = '') {
  if (y()) return e();
  {
    t && (location.href = '/'),
      document.querySelector('[data-auth=register]').click();
    const o = document.createElement('div');
    return (
      o.classList.add('alert', 'alert-warning'),
      (o.innerText = 'Please register or login to view this page.'),
      o
    );
  }
}
async function ke() {
  const { view: e, postId: t, name: o } = h();
  switch (e) {
    case 'post':
      return f(() => {
        const r = x();
        return S(r), Ee(t);
      }, e);
    case 'profile':
      return f(() => $e(o), e);
    case 'profiles':
      return f(async () => {
        const r = await z();
        return Te(r);
      }, e);
    case 'posts':
    default:
      return f(async () => {
        const r = Array.from({ length: u('posts:lastTime') || 3 }, () => x());
        S(...r);
        const n = await J();
        return F('posts:lastTime', n.length), P(n);
      }, e);
  }
}
const Ie = async () => {
  const e = await ke();
  S(e);
};
function xe() {
  document
    .querySelectorAll('[data-auth=logout]')
    .forEach((e) => e.addEventListener('click', ne));
}
const Ne = () => {
    document.querySelector('form#loginForm').addEventListener('submit', oe),
      document
        .querySelector('form#registerForm')
        .addEventListener('submit', ae);
  },
  je = () => {
    const e = document.querySelector('footer').querySelector('#footerActions');
    if (y()) {
      const t = u('profile');
      e.prepend(A(t));
    }
  },
  Oe = () => {
    xe(), Ne(), je(), b();
  };
Oe();
Ie();
