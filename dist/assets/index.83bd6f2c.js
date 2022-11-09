(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === 'childList')
        for (const a of s.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerpolicy && (s.referrerPolicy = r.referrerpolicy),
      r.crossorigin === 'use-credentials'
        ? (s.credentials = 'include')
        : r.crossorigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = o(r);
    fetch(r.href, s);
  }
})();
const A = new URL('https://nf-api.onrender.com/api/v1'),
  i = A.toString(),
  u = (e) => {
    try {
      return JSON.parse(localStorage.getItem(e));
    } catch {
      return null;
    }
  },
  P = (e) => localStorage.removeItem(e),
  S = (e, t) => {
    localStorage.setItem(e, JSON.stringify(t));
  },
  l = (e) => {
    const t = u('token'),
      o = {};
    return (
      e && (o['Content-Type'] = e), t && (o.Authorization = `Bearer ${t}`), o
    );
  };
async function j(e, t) {
  const o = await fetch(`${i}/social/auth/login`, {
    method: 'post',
    body: JSON.stringify({ email: e, password: t }),
    headers: l('application/json'),
  });
  if (o.ok) {
    const n = await o.json();
    return S('token', n.accessToken), delete n.accessToken, S('profile', n), n;
  }
  throw new Error(o.statusText);
}
function D() {
  P('token'), P('profile');
}
async function J(e, t, o, n) {
  const r = await fetch(`${i}/social/auth/register`, {
    method: 'post',
    body: JSON.stringify({ name: e, email: t, password: o, avatar: n }),
    headers: l('application/json'),
  });
  if (r.ok) return await r.json();
  throw new Error(r.statusText);
}
const w = () => Boolean(u('token')),
  y = () => u('profile');
async function R(e, t, o, n) {
  const r = await fetch(`${i}/social/posts/`, {
    method: 'post',
    body: JSON.stringify({ title: e, body: t, media: o, tags: n }),
    headers: l('application/json'),
  });
  if (r.ok) return await r.json();
  throw new Error(r.statusText);
}
async function C(e = 20, t = 0) {
  const o = await fetch(
    `${i}/social/posts?limit=${e}&offset=${t}&_reactions=true&_author=true&_comments=true`,
    { headers: l() }
  );
  if (o.ok) return await o.json();
  throw new Error(o.statusText);
}
async function U(e) {
  const t = await fetch(
    `${i}/social/posts/${e}?_reactions=true&_author=true&_comments=true`,
    { headers: l() }
  );
  if (t.ok) return await t.json();
  throw new Error(t.statusText);
}
async function M(e, t, o, n, r) {
  const { name: s } = y(),
    a = await fetch(`${i}/social/posts/${e}`, {
      method: 'put',
      body: JSON.stringify({ title: t, body: o, media: n, tags: r, owner: s }),
      headers: l('application/json'),
    });
  if (a.ok) return await a.json();
  throw new Error(a.statusText);
}
async function V(e) {
  const t = await fetch(`${i}/social/posts/${e}`, {
    method: 'delete',
    headers: l(),
  });
  if (t.ok) return await t.json();
  throw new Error(t.statusText);
}
async function Z(e, t) {
  const o = await fetch(`${i}/social/posts/${e}/react/${t}`, {
    headers: l(),
    method: 'put',
  });
  if (o.ok) return await o.json();
  throw new Error(o.statusText);
}
async function H(e, t, o) {
  const n = await fetch(`${i}/social/posts/${e}/comment`, {
    method: 'post',
    body: JSON.stringify({ body: t, replyToId: o }),
    headers: l('application/json'),
  });
  if (n.ok) return await n.json();
  throw new Error(n.statusText);
}
async function K() {
  const e = await fetch(`${i}/social/profiles`, { headers: l() });
  if (e.ok) return await e.json();
  throw new Error(e.statusText);
}
async function z(e) {
  const t = await fetch(
    `${i}/social/profiles/${e}?&_followers=true&_posts=true&_following=true`,
    { headers: l() }
  );
  if (t.ok) return await t.json();
  throw new Error(t.statusText);
}
const h = () => {
    const e = new URL(window.location);
    return Object.fromEntries(e.searchParams);
  },
  G = (e) => {
    const t = { ...h(), ...e },
      o = new URLSearchParams(t);
    window.location.search = o.toString();
  },
  c = (e = '404') => {
    const t = document.querySelector(`template#${e}`);
    if (t) return t.content.cloneNode(!0);
    throw new Error(`Template #${e} not found`);
  },
  Q = (e) => {
    const t = u('profile'),
      o = c('postActions'),
      n = e.author && t.name === e.author.name,
      { postId: r } = h(),
      s = r == e.id,
      a = o.querySelector('a[data-action=view]'),
      d = o.querySelector('button[data-action=delete]');
    return (
      s ? a.remove() : (a.href = `/?view=post&postId=${e.id}`),
      n
        ? d.addEventListener('click', async () => {
            await V(e.id), (location.href = '/');
          })
        : d.remove(),
      o
    );
  };
function F(e) {
  for (; e.firstChild; ) e.removeChild(e.firstChild);
}
const W = (e) => {
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
  b = (e) => {
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
  X = (e) => {
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
  Y = (e) => {
    const t = c('postHeader');
    (t.querySelector('.card-header').href = `/?view=post&postId=${e.id}`),
      (t.querySelector('b').innerText = e.title),
      e.body
        ? (t.querySelector('span').innerText = e.body)
        : t.querySelector('span').remove();
    const o = W(e.comments),
      n = X(e),
      r = [o, n];
    return (
      e.author && r.push(b(e.author)),
      t.querySelector('.card-header').append(...r),
      t
    );
  },
  ee = (e, t = 'a') => {
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
function te() {
  const e = c('postFooter');
  return e.querySelector('.card-footer').append(...arguments), e;
}
const oe = [
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
  ne = (e = []) => oe.filter((t) => !e.map((o) => o.symbol).includes(t));
function q() {
  const e = u('token');
  document.body.classList[e ? 'add' : 'remove']('logged-in');
}
async function re(e) {
  e.preventDefault();
  const t = e.target,
    o = new FormData(t),
    n = o.get('email'),
    r = o.get('password'),
    { name: s } = await j(n, r);
  q(), (location.href = `/?view=profile&name=${s}`);
}
function se() {
  D(), q(), (window.location.href = '/');
}
async function ae(e) {
  e.preventDefault();
  const t = e.target,
    o = new FormData(t),
    n = o.get('email'),
    r = o.get('name'),
    s = o.get('password'),
    a = o.get('avatar');
  await J(r, n, s, a), await j(n, s), location.reload();
}
async function ce(e) {
  const t = e.srcElement,
    o = t.dataset.symbol,
    n = t.dataset.postId;
  n && o && (await Z(n, o), location.reload());
}
async function ie(e) {
  e.preventDefault();
  const t = e.target,
    n = new FormData(t).get('body'),
    r = t.dataset.postId,
    s = h().replyToId;
  await H(r, n, s), t.remove(), location.reload();
}
async function le(e) {
  const t = await fetch(`${i}/social/profiles/${e}/follow`, {
    headers: l(),
    method: 'put',
  });
  if (t.ok) return await t.json();
  throw new Error(t.statusText);
}
async function de(e) {
  const t = await fetch(`${i}/social/profiles/${e}/unfollow`, {
    headers: l(),
    method: 'put',
  });
  if (t.ok) return await t.json();
  throw new Error(t.statusText);
}
async function ue(e) {
  const o = e.srcElement.dataset.name;
  o && (await le(o), location.reload());
}
async function me(e) {
  const o = e.srcElement.dataset.name;
  o && (await de(o), location.reload());
}
const pe = (e) => {
    const t = c('reactionMenu');
    if (e.reactions && e.reactions.length) {
      const r = e.reactions.sort((s, a) => a.count - s.count).map((s) => fe(s));
      t.querySelector('.reactions').prepend(...r);
    }
    const o = ne(e.reactions);
    return (
      t.querySelector('.dropdown-menu').append(...o.map((r) => we(r, e.id))),
      t.querySelectorAll('[data-reaction]').forEach((r) => {
        r.addEventListener('click', ce);
      }),
      t
    );
  },
  fe = ({ symbol: e, count: t, postId: o }) => {
    const n = c('reactionButton');
    return (
      (n.querySelector('.btn').dataset.symbol = e),
      n.querySelector('.btn').prepend(`${e}`),
      (n.querySelector('.badge').innerText = t),
      (n.querySelector('.btn').dataset.postId = o),
      n
    );
  },
  we = (e, t) => {
    const o = c('reactionOption');
    return (
      (o.querySelector('.dropdown-item').dataset.symbol = e),
      (o.querySelector('.dropdown-item').dataset.postId = t),
      (o.querySelector('.dropdown-item').innerText = e),
      o
    );
  },
  m = (e, t = !1) => {
    const o = c('postThumbnail');
    o.querySelector('.post').id = e.id;
    const n = Y(e),
      r = ee(e, t ? 'div' : 'a'),
      s = te(Q(e), pe(e)),
      a = [n, r, s];
    return o.querySelector('.thumbnail').append(...a), o;
  };
function ye(e, t) {
  (t.title.value = e.title),
    (t.body.value = e.body),
    (t.media.value = e.media),
    (t.tags.value = e.tags.join(', '));
}
function k(e, t) {
  const o = m(e, !1);
  F(t), t.append(o);
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
        const s = {
          title: o.title.value,
          body: o.body.value,
          media: o.media.value,
          tags: o.tags.value.split(', '),
        };
        k(s, r);
      }),
      o.addEventListener('submit', async (s) => {
        s.preventDefault();
        const d = new URL(location.href).searchParams.get('postId'),
          _ = s.target,
          p = new FormData(_),
          T = p.get('title'),
          L = p.get('body'),
          E = p.get('media'),
          $ = p.get('tags').split(', ');
        let g;
        d ? (g = await M(d, T, L, E, $)) : (g = await R(T, L, E, $)),
          (location.href = `/?view=post&postId=${g.id}`);
      }),
      t
    );
  },
  he = (e, t = '') => {
    const { name: o } = y(),
      n = c('comment');
    (n.querySelector('.comment-body').innerText = e.body),
      (n.querySelector('.owner').innerText = e.owner),
      (n.querySelector('.owner').href = `/?view=profile&name=${e.owner}`);
    const r = document.createElement('button');
    return (
      r.classList.add('btn', 'btn-sm', 'btn-success'),
      (r.innerText = 'Reply'),
      r.addEventListener('click', () => {
        G({ replyToId: e.id });
      }),
      n.querySelector('.comment-header').prepend(r),
      o === e.owner && n.querySelector('.comment').classList.add('me'),
      o === t && n.querySelector('.comment').classList.add('op'),
      n
    );
  },
  ge = (e) => {
    const t = c('commentForm');
    return (
      (t.querySelector('form').dataset.postId = e),
      t.querySelector('form').addEventListener('submit', ie),
      t
    );
  },
  O = (e) => {
    const t = document.createElement('div');
    if ((t.classList.add('post-comments'), e && e.comments)) {
      const o = e.comments.map((n) => he(n, e.author.name));
      t.append(...o);
    }
    return t.append(ge(e.id)), t;
  },
  Se = {
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
    e = { ...Se, ...e };
    const t = m(e);
    return t.querySelector('.post').classList.add('loader'), t;
  },
  ve = () => c('postTabs'),
  B = (e) => {
    const t = c('profileButton');
    return (
      (t.querySelector('img').src = e.avatar),
      (t.querySelector('.btn').innerText = e.name),
      (t.querySelector('a').href = `/?view=profile&name=${e.name}`),
      t
    );
  },
  N = (e, t = !1) => {
    const o = document.createElement('div');
    return (
      o.classList.add('post', 'list'), o.append(...e.map((n) => m(n, t))), o
    );
  },
  be = (e) => {
    if (e && e.followers && e.followers.length) {
      const t = document.createElement('div');
      return (
        t.classList.add('followers'),
        t.append('Followers', ...e.followers.map(b)),
        t
      );
    }
    return `\r
`;
  },
  qe = (e) => {
    if (e.following && e.following.length) {
      const t = document.createElement('div');
      return (
        t.classList.add('following'),
        t.append('Following', ...e.following.map(b)),
        t
      );
    }
    return `\r
`;
  },
  Te = (e) => {
    const t = document.createElement('div');
    t.classList.add('profile', 'follows');
    const o = [be(e), qe(e)];
    return t.append(...o), t;
  },
  Le = (e) => {
    const t = c('profilePagePrivate'),
      { name: o } = y();
    if (
      ((t.querySelector('img.avatar').src = e.avatar),
      (t.querySelector('.profile-name').innerText = e.name),
      (t.querySelector('.profile-email').innerText = e.email),
      t.querySelector('.upper').prepend(Te(e)),
      e.posts && e.posts.length)
    ) {
      const n = N(e.posts);
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
              .addEventListener('click', me))
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
function v() {
  const e = document.querySelector('main');
  F(e), e.append(...arguments);
}
const Ee = async (e) => {
    const t = document.createElement('div');
    t.classList.add('post', 'page', 'mb-3');
    const o = m(e, !0),
      n = O(e);
    return t.append(o, n), t;
  },
  $e = async (e) => {
    if (!w()) location.href = '/';
    else {
      const t = y();
      if (e) {
        const o = await U(e);
        if (o.author.name === t.name) {
          const r = ve(),
            s = m(o),
            a = x(o),
            d = O(o);
          return (
            r.querySelector('#nav-default').append(s, d),
            r.querySelector('#nav-edit').append(a),
            r
          );
        }
        return Ee(o);
      }
      return x();
    }
  },
  Pe = async (e) => {
    const t = document.createElement('div');
    return (
      t.classList.add('profile', 'list'), t.append(...e.map((o) => B(o))), t
    );
  },
  ke = async (e) => {
    if (!w()) location.href = '/';
    else return Le(await z(e));
  };
function f(e = () => {}, t = '') {
  if (w()) return e();
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
async function xe() {
  const { view: e, postId: t, name: o } = h();
  switch (e) {
    case 'post':
      return f(() => {
        const n = I();
        return v(n), $e(t);
      }, e);
    case 'profile':
      return f(() => ke(o), e);
    case 'profiles':
      return f(async () => {
        const n = await K();
        return Pe(n);
      }, e);
    case 'posts':
    default:
      return f(async () => {
        const n = Array.from({ length: u('posts:lastTime') || 3 }, () => I());
        v(...n);
        const r = await C();
        return S('posts:lastTime', r.length), N(r);
      }, e);
  }
}
const Ie = async () => {
  const e = await xe();
  v(e);
};
function je() {
  document
    .querySelectorAll('[data-auth=logout]')
    .forEach((e) => e.addEventListener('click', se));
}
const Fe = () => {
    document.querySelector('form#loginForm').addEventListener('submit', re),
      document
        .querySelector('form#registerForm')
        .addEventListener('submit', ae);
  },
  Oe = () => {
    const t = document.querySelector('footer').querySelector('#footerActions');
    if (w()) {
      const o = u('profile');
      t.prepend(B(o));
    }
  },
  Be = () => {
    je(), Fe(), Oe(), q();
  };
Be();
Ie();
