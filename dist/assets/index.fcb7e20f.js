(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const a of r)
      if (a.type === 'childList')
        for (const s of a.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(r) {
    const a = {};
    return (
      r.integrity && (a.integrity = r.integrity),
      r.referrerpolicy && (a.referrerPolicy = r.referrerpolicy),
      r.crossorigin === 'use-credentials'
        ? (a.credentials = 'include')
        : r.crossorigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const a = o(r);
    fetch(r.href, a);
  }
})();
(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) o(n);
  new MutationObserver((n) => {
    for (const r of n)
      if (r.type === 'childList')
        for (const a of r.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && o(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(n) {
    const r = {};
    return (
      n.integrity && (r.integrity = n.integrity),
      n.referrerpolicy && (r.referrerPolicy = n.referrerpolicy),
      n.crossorigin === 'use-credentials'
        ? (r.credentials = 'include')
        : n.crossorigin === 'anonymous'
        ? (r.credentials = 'omit')
        : (r.credentials = 'same-origin'),
      r
    );
  }
  function o(n) {
    if (n.ep) return;
    n.ep = !0;
    const r = t(n);
    fetch(n.href, r);
  }
})();
const D = new URL('https://nf-api.onrender.com/api/v1'),
  i = D.toString(),
  l = (e) => {
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
  u = (e) => {
    const t = l('token'),
      o = {};
    return (
      e && (o['Content-Type'] = e), t && (o.Authorization = `Bearer ${t}`), o
    );
  };
async function j(e, t) {
  const o = await fetch(`${i}/social/auth/login`, {
    method: 'post',
    body: JSON.stringify({ email: e, password: t }),
    headers: u('application/json'),
  });
  if (o.ok) {
    const n = await o.json();
    return F('token', n.accessToken), delete n.accessToken, F('profile', n), n;
  }
  throw new Error(o.statusText);
}
function _() {
  $('token'), $('profile');
}
async function B(e, t, o, n) {
  const r = await fetch(`${i}/social/auth/register`, {
    method: 'post',
    body: JSON.stringify({ name: e, email: t, password: o, avatar: n }),
    headers: u('application/json'),
  });
  if (r.ok) return await r.json();
  throw new Error(r.statusText);
}
const y = () => Boolean(l('token')),
  w = () => l('profile');
async function C(e, t, o, n) {
  const r = await fetch(`${i}/social/posts/`, {
    method: 'post',
    body: JSON.stringify({ title: e, body: t, media: o, tags: n }),
    headers: u('application/json'),
  });
  if (r.ok) return await r.json();
  throw new Error(r.statusText);
}
async function J(e = 20, t = 0) {
  const o = await fetch(
    `${i}/social/posts?limit=${e}&offset=${t}&_reactions=true&_author=true&_comments=true`,
    { headers: u() }
  );
  if (o.ok) return await o.json();
  throw new Error(o.statusText);
}
async function R(e) {
  const t = await fetch(
    `${i}/social/posts/${e}?_reactions=true&_author=true&_comments=true`,
    { headers: u() }
  );
  if (t.ok) return await t.json();
  throw new Error(t.statusText);
}
async function U(e, t, o, n, r) {
  const { name: a } = w(),
    s = await fetch(`${i}/social/posts/${e}`, {
      method: 'put',
      body: JSON.stringify({ title: t, body: o, media: n, tags: r, owner: a }),
      headers: u('application/json'),
    });
  if (s.ok) return await s.json();
  throw new Error(s.statusText);
}
async function M(e) {
  const t = await fetch(`${i}/social/posts/${e}`, {
    method: 'delete',
    headers: u(),
  });
  if (t.ok) return await t.json();
  throw new Error(t.statusText);
}
async function Z(e, t) {
  const o = await fetch(`${i}/social/posts/${e}/react/${t}`, {
    headers: u(),
    method: 'put',
  });
  if (o.ok) return await o.json();
  throw new Error(o.statusText);
}
async function K(e, t, o) {
  const n = await fetch(`${i}/social/posts/${e}/comment`, {
    method: 'post',
    body: JSON.stringify({ body: t, replyToId: o }),
    headers: u('application/json'),
  });
  if (n.ok) return await n.json();
  throw new Error(n.statusText);
}
async function z() {
  const e = await fetch(`${i}/social/profiles`, { headers: u() });
  if (e.ok) return await e.json();
  throw new Error(e.statusText);
}
async function H(e) {
  const t = await fetch(
    `${i}/social/profiles/${e}?&_followers=true&_posts=true&_following=true`,
    { headers: u() }
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
  c = (e = '404') => {
    const t = document.querySelector(`template#${e}`);
    if (t) return t.content.cloneNode(!0);
    throw new Error(`Template #${e} not found`);
  },
  G = (e) => {
    const t = l('profile'),
      o = c('postActions'),
      n = e.author && t.name === e.author.name,
      { postId: r } = h(),
      a = r == e.id,
      s = o.querySelector('a[data-action=view]'),
      m = o.querySelector('button[data-action=delete]');
    return (
      a ? s.remove() : (s.href = `/?view=post&postId=${e.id}`),
      n
        ? m.addEventListener('click', async () => {
            await M(e.id), (location.href = '/');
          })
        : m.remove(),
      o
    );
  };
function O(e) {
  for (; e.firstChild; ) e.removeChild(e.firstChild);
}
const Q = (e) => {
    if (e && e.length) {
      const t = c('commentsTag');
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
      const o = e.tags.map((n) => {
        const r = c('postTag');
        return (r.querySelector('.badge').innerText = n), r;
      });
      return t.append(...o), t;
    }
    return `\r
`;
  },
  X = (e) => {
    const t = c('postHeader');
    (t.querySelector('.card-header').href = `/?view=post&postId=${e.id}`),
      (t.querySelector('b').innerText = e.title),
      e.body
        ? (t.querySelector('span').innerText = e.body)
        : t.querySelector('span').remove();
    const o = Q(e.comments),
      n = W(e),
      r = [o, n];
    return (
      e.author && r.push(v(e.author)),
      t.querySelector('.card-header').append(...r),
      t
    );
  },
  Y = (e, t = 'a') => {
    if (e.media) {
      const o = document.createElement(t);
      o.classList.add('card-img');
      const n = new Image();
      return (
        (n.src = e.media),
        (n.alt = e.title),
        n.classList.add('img-fluid', 'w-100'),
        t.toLowerCase() === 'a' &&
          ((o.href = `/?view=post&postId=${e.id}`),
          (o.title = `View ${e.title}`)),
        o.append(n),
        o
      );
    }
    return `\r
`;
  };
function ee() {
  const e = c('postFooter');
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
  oe = (e = []) => te.filter((t) => !e.map((o) => o.symbol).includes(t));
function q() {
  const e = l('token');
  document.body.classList[e ? 'add' : 'remove']('logged-in');
}
async function ne(e) {
  e.preventDefault();
  const t = e.target,
    o = new FormData(t),
    n = o.get('email'),
    r = o.get('password'),
    { name: a } = await j(n, r);
  q(), (location.href = `/?view=profile&name=${a}`);
}
function re() {
  _(), q(), (window.location.href = '/');
}
async function ae(e) {
  e.preventDefault();
  const t = e.target,
    o = new FormData(t),
    n = o.get('email'),
    r = o.get('name'),
    a = o.get('password'),
    s = o.get('avatar');
  await B(r, n, a, s), await j(n, a), location.reload();
}
async function se(e) {
  const t = e.srcElement,
    o = t.dataset.symbol,
    n = t.dataset.postId;
  n && o && (await Z(n, o), location.reload());
}
async function ce(e) {
  e.preventDefault();
  const t = e.target,
    o = new FormData(t).get('body'),
    n = t.dataset.postId,
    r = h().replyToId;
  await K(n, o, r), t.remove(), location.reload();
}
async function ie(e) {
  const t = await fetch(`${i}/social/profiles/${e}/follow`, {
    headers: u(),
    method: 'put',
  });
  if (t.ok) return await t.json();
  throw new Error(t.statusText);
}
async function ue(e) {
  const t = await fetch(`${i}/social/profiles/${e}/unfollow`, {
    headers: u(),
    method: 'put',
  });
  if (t.ok) return await t.json();
  throw new Error(t.statusText);
}
async function le(e) {
  const t = e.srcElement.dataset.name;
  t && (await ie(t), location.reload());
}
async function de(e) {
  const t = e.srcElement.dataset.name;
  t && (await ue(t), location.reload());
}
const me = (e) => {
    const t = c('reactionMenu');
    if (e.reactions && e.reactions.length) {
      const n = e.reactions.sort((r, a) => a.count - r.count).map((r) => pe(r));
      t.querySelector('.reactions').prepend(...n);
    }
    const o = oe(e.reactions);
    return (
      t.querySelector('.dropdown-menu').append(...o.map((n) => fe(n, e.id))),
      t.querySelectorAll('[data-reaction]').forEach((n) => {
        n.addEventListener('click', se);
      }),
      t
    );
  },
  pe = ({ symbol: e, count: t, postId: o }) => {
    const n = c('reactionButton');
    return (
      (n.querySelector('.btn').dataset.symbol = e),
      n.querySelector('.btn').prepend(`${e}`),
      (n.querySelector('.badge').innerText = t),
      (n.querySelector('.btn').dataset.postId = o),
      n
    );
  },
  fe = (e, t) => {
    const o = c('reactionOption');
    return (
      (o.querySelector('.dropdown-item').dataset.symbol = e),
      (o.querySelector('.dropdown-item').dataset.postId = t),
      (o.querySelector('.dropdown-item').innerText = e),
      o
    );
  },
  d = (e, t = !1) => {
    const o = c('postThumbnail');
    o.querySelector('.post').id = e.id;
    const n = X(e),
      r = Y(e, t ? 'div' : 'a'),
      a = ee(G(e), me(e)),
      s = [n, r, a];
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
  O(t), t.append(o);
}
const x = (e) => {
    const t = c('postForm'),
      o = t.querySelector('#postForm'),
      n = t.querySelector('[data-action=submit]'),
      r = t.querySelector('#postPreview');
    return (
      e && e.id
        ? (ye(e, o),
          k(e, r),
          (n.querySelector('[data-action=publish]').style.display = 'none'))
        : (n.querySelector('[data-action=update]').style.display = 'none'),
      o.addEventListener('input', () => {
        const a = {
          title: o.title.value,
          body: o.body.value,
          media: o.media.value,
          tags: o.tags.value.split(', '),
        };
        k(a, r);
      }),
      o.addEventListener('submit', async (a) => {
        a.preventDefault();
        const s = new URL(location.href).searchParams.get('postId'),
          m = a.target,
          p = new FormData(m),
          b = p.get('title'),
          E = p.get('body'),
          L = p.get('media'),
          T = p.get('tags').split(', ');
        let g;
        s ? (g = await U(s, b, E, L, T)) : (g = await C(b, E, L, T)),
          (location.href = `/?view=post&postId=${g.id}`);
      }),
      t
    );
  },
  we = (e, t = '') => {
    const { name: o } = w(),
      n = c('comment');
    (n.querySelector('.comment-body').innerText = e.body),
      (n.querySelector('.owner').innerText = e.owner),
      (n.querySelector('.owner').href = `/?view=profile&name=${e.owner}`);
    const r = document.createElement('button');
    return (
      r.classList.add('btn', 'btn-sm', 'btn-success'),
      (r.innerText = 'Reply'),
      r.addEventListener('click', () => {
        V({ replyToId: e.id });
      }),
      n.querySelector('.comment-header').prepend(r),
      o === e.owner && n.querySelector('.comment').classList.add('me'),
      o === t && n.querySelector('.comment').classList.add('op'),
      n
    );
  },
  he = (e) => {
    const t = c('commentForm');
    return (
      (t.querySelector('form').dataset.postId = e),
      t.querySelector('form').addEventListener('submit', ce),
      t
    );
  },
  N = (e) => {
    const t = document.createElement('div');
    if ((t.classList.add('post-comments'), e && e.comments)) {
      const o = e.comments.map((n) => we(n, e.author.name));
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
  I = (e = {}) => {
    e = { ...ge, ...e };
    const t = d(e);
    return t.querySelector('.post').classList.add('loader'), t;
  },
  Fe = () => c('postTabs'),
  A = (e) => {
    const t = c('profileButton');
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
      o.classList.add('post', 'list'), o.append(...e.map((n) => d(n, t))), o
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
  qe = (e) => {
    const t = document.createElement('div');
    t.classList.add('profile', 'follows');
    const o = [Se(e), ve(e)];
    return t.append(...o), t;
  },
  be = (e) => {
    const t = c('profilePagePrivate'),
      { name: o } = w();
    if (
      ((t.querySelector('img.avatar').src = e.avatar),
      (t.querySelector('.profile-name').innerText = e.name),
      (t.querySelector('.profile-email').innerText = e.email),
      t.querySelector('.upper').prepend(qe(e)),
      e.posts && e.posts.length)
    ) {
      const n = P(e.posts);
      t.querySelector('.profile-posts').append(n);
    } else {
      const n = document.createElement('div');
      n.classList.add('alert', 'alert-info'),
        (n.innerText = 'There are no posts yet...'),
        t.querySelector('.profile-posts').append(n);
    }
    return (
      e.name !== o
        ? e.followers.find((n) => n.name === o)
          ? (t.querySelector('[data-action=follow]').remove(),
            (t.querySelector('[data-action=unfollow]').dataset.name = e.name),
            t
              .querySelector('[data-action=unfollow]')
              .addEventListener('click', de))
          : (t.querySelector('[data-action=unfollow]').remove(),
            (t.querySelector('[data-action=follow]').dataset.name = e.name),
            t
              .querySelector('[data-action=follow]')
              .addEventListener('click', le))
        : (t.querySelector('[data-action=follow]').remove(),
          t.querySelector('[data-action=unfollow]').remove()),
      t
    );
  };
function S() {
  const e = document.querySelector('main');
  O(e), e.append(...arguments);
}
const Ee = async (e) => {
    const t = document.createElement('div');
    t.classList.add('post', 'page', 'mb-3');
    const o = d(e, !0),
      n = N(e);
    return t.append(o, n), t;
  },
  Le = async (e) => {
    if (!y()) location.href = '/';
    else {
      const t = w();
      if (e) {
        const o = await R(e);
        if (o.author.name === t.name) {
          const n = Fe(),
            r = d(o),
            a = x(o),
            s = N(o);
          return (
            n.querySelector('#nav-default').append(r, s),
            n.querySelector('#nav-edit').append(a),
            n
          );
        }
        return Ee(o);
      }
      return x();
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
    else return be(await H(e));
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
        const n = I();
        return S(n), Le(t);
      }, e);
    case 'profile':
      return f(() => $e(o), e);
    case 'profiles':
      return f(async () => {
        const n = await z();
        return Te(n);
      }, e);
    case 'posts':
    default:
      return f(async () => {
        const n = Array.from({ length: l('posts:lastTime') || 3 }, () => I());
        S(...n);
        const r = await J();
        return F('posts:lastTime', r.length), P(r);
      }, e);
  }
}
const xe = async () => {
  const e = await ke();
  S(e);
};
function Ie() {
  document
    .querySelectorAll('[data-auth=logout]')
    .forEach((e) => e.addEventListener('click', re));
}
const je = () => {
    document.querySelector('form#loginForm').addEventListener('submit', ne),
      document
        .querySelector('form#registerForm')
        .addEventListener('submit', ae);
  },
  Oe = () => {
    const e = document.querySelector('footer').querySelector('#footerActions');
    if (y()) {
      const t = l('profile');
      e.prepend(A(t));
    }
  },
  Ne = () => {
    Ie(), je(), Oe(), q();
  };
Ne();
xe();
