import e from 'final-form-calculate';
import t from 'jsonld';
import {
  fetchUtils as r,
  useQueryWithStore as n,
  Link as o,
  useReference as a,
  LinearProgress as i,
  Datagrid as c,
  DateField as u,
  ReferenceField as s,
  TextField as l,
  useGetMany as f,
  ShowButton as p,
  ReferenceArrayInput as d,
  TextInput as m,
  DateTimeInput as y
} from 'react-admin';
import h from 'react';
var b = function(e) {
  return {
    login: function(e) {
      return Promise.resolve();
    },
    logout: function() {
      localStorage.removeItem('token'), (window.location.href = ''.concat(e, 'auth/logout?global=true'));
    },
    checkAuth: function() {
      if (localStorage.getItem('token')) return Promise.resolve();
      var t = new URL(window.location);
      return (
        t.searchParams.has('token')
          ? (localStorage.setItem('token', t.searchParams.get('token')),
            t.searchParams.delete('token'),
            (window.location.href = t.toString()))
          : (window.location.href = ''.concat(e, 'auth?redirectUrl=') + encodeURI(window.location.href)),
        Promise.resolve()
      );
    },
    checkError: function(e) {
      return Promise.resolve();
    },
    getPermissions: function(e) {
      return Promise.resolve();
    }
  };
};
function g(e) {
  return (g =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function(e) {
          return typeof e;
        }
      : function(e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
            ? 'symbol'
            : typeof e;
        })(e);
}
function v(e, t, r, n, o, a, i) {
  try {
    var c = e[a](i),
      u = c.value;
  } catch (e) {
    return void r(e);
  }
  c.done ? t(u) : Promise.resolve(u).then(n, o);
}
function w(e) {
  return function() {
    var t = this,
      r = arguments;
    return new Promise(function(n, o) {
      var a = e.apply(t, r);
      function i(e) {
        v(a, n, o, i, c, 'next', e);
      }
      function c(e) {
        v(a, n, o, i, c, 'throw', e);
      }
      i(void 0);
    });
  };
}
function E(e, t, r) {
  return (
    t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e
  );
}
function P() {
  return (P =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }).apply(this, arguments);
}
function j(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? j(Object(r), !0).forEach(function(t) {
          E(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : j(Object(r)).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
  }
  return e;
}
function S(e, t) {
  return (
    (function(e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function(e, t) {
      if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e))) return;
      var r = [],
        n = !0,
        o = !1,
        a = void 0;
      try {
        for (
          var i, c = e[Symbol.iterator]();
          !(n = (i = c.next()).done) && (r.push(i.value), !t || r.length !== t);
          n = !0
        );
      } catch (e) {
        (o = !0), (a = e);
      } finally {
        try {
          n || null == c.return || c.return();
        } finally {
          if (o) throw a;
        }
      }
      return r;
    })(e, t) ||
    k(e, t) ||
    (function() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    })()
  );
}
function k(e, t) {
  if (e) {
    if ('string' == typeof e) return A(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === r && e.constructor && (r = e.constructor.name),
      'Map' === r || 'Set' === r
        ? Array.from(e)
        : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        ? A(e, t)
        : void 0
    );
  }
}
function A(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function x(e) {
  if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
    if (Array.isArray(e) || (e = k(e))) {
      var t = 0,
        r = function() {};
      return {
        s: r,
        n: function() {
          return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
        },
        e: function(e) {
          throw e;
        },
        f: r
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  var n,
    o,
    a = !0,
    i = !1;
  return {
    s: function() {
      n = e[Symbol.iterator]();
    },
    n: function() {
      var e = n.next();
      return (a = e.done), e;
    },
    e: function(e) {
      (i = !0), (o = e);
    },
    f: function() {
      try {
        a || null == n.return || n.return();
      } finally {
        if (i) throw o;
      }
    }
  };
}
var R = function(t) {
    for (var r = [], n = 0, o = Object.entries(t); n < o.length; n++) {
      var a = S(o[n], 2),
        i = a[0],
        c = a[1];
      r.push({
        field: i,
        updates: E({}, c, function(e) {
          return e;
        })
      });
    }
    return e.apply(void 0, r);
  },
  T = function(e, t) {
    var r = {};
    return (
      e.forEach(function(e) {
        return (r[e.prefix] = e.url);
      }),
      t
        ? (delete r[t],
          [
            e.find(function(e) {
              return e.prefix === t;
            }).context,
            r
          ])
        : r
    );
  },
  I = function(e) {
    var t = e.types,
      r = e.params,
      n = r.pagination,
      o = (r.sort, r.filter),
      a = e.ontologies,
      i = '';
    return (
      o.q &&
        o.q.length > 0 &&
        (i = '\n      {\n        SELECT ?s1\n        WHERE {\n          ?s1 ?p1 ?o1 .\n          FILTER regex(str(?o1), "'.concat(
          o.q,
          '")\n          FILTER NOT EXISTS {?s1 a ?o1}\n        }\n      }\n      '
        )),
      '\n    '
        .concat(
          (function(e) {
            return e
              .map(function(e) {
                return 'PREFIX '.concat(e.prefix, ': <').concat(e.url, '>');
              })
              .join('\n');
          })(a),
          '\n    CONSTRUCT { \n      ?s1 ?p2 ?o2\n    }\n    WHERE {\n      '
        )
        .concat(i, '\n      ?s1 a ?type .\n      FILTER( ?type IN (')
        .concat(
          t.join(', '),
          ") ) .\n      FILTER( (isIRI(?s1)) ) .\n      ?s1 ?p2 ?o2 .\n    }\n    # TODO try to make pagination work in SPARQL as this doesn't work.\n    # LIMIT "
        )
        .concat(n.perPage, '\n    # OFFSET ')
        .concat((n.page - 1) * n.perPage, '\n  ')
    );
  },
  C = function(e) {
    var r,
      n,
      o,
      a,
      i,
      c,
      u = e.sparqlEndpoint,
      s = e.httpClient,
      l = e.resources,
      f = e.ontologies,
      p = e.mainOntology;
    return {
      getList:
        ((c = w(
          regeneratorRuntime.mark(function e(r, n) {
            var o, a, i, c, d, m, y, h, b, g;
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if ((l[r], !n.id && !n['@id'] && l[r].types)) {
                      e.next = 16;
                      break;
                    }
                    return (o = n.id || n['@id'] || l[r].containerUri), (e.next = 5), s(o);
                  case 5:
                    if (
                      ((a = e.sent),
                      (i = a.json),
                      (c = ['ldp:contains', 'as:orderedItems', 'orderedItems', 'as:items', 'items'].find(function(e) {
                        return i[e];
                      })))
                    ) {
                      e.next = 11;
                      break;
                    }
                    throw new Error('Unknown list type');
                  case 11:
                    return (
                      (d = i[c].map(function(e) {
                        return (e.id = e.id || e['@id']), e;
                      })),
                      n.pagination &&
                        (d = d.slice(
                          (n.pagination.page - 1) * n.pagination.perPage,
                          n.pagination.page * n.pagination.perPage
                        )),
                      e.abrupt('return', { data: d, total: i[c].length })
                    );
                  case 16:
                    return (
                      (m = I({ types: l[r].types, params: n, ontologies: f })),
                      (e.next = 19),
                      s(u, { method: 'POST', body: m })
                    );
                  case 19:
                    return (y = e.sent), (h = y.json), (e.next = 23), t.compact(h, T(f, p));
                  case 23:
                    if (((b = e.sent), 1 !== Object.keys(b).length)) {
                      e.next = 28;
                      break;
                    }
                    return e.abrupt('return', { data: [], total: 0 });
                  case 28:
                    if (b['@graph']) {
                      e.next = 32;
                      break;
                    }
                    return e.abrupt('return', { data: [b], total: 1 });
                  case 32:
                    return (
                      (g = b['@graph']
                        .map(function(e) {
                          return (e.id = e.id || e['@id']), e;
                        })
                        .slice(
                          (n.pagination.page - 1) * n.pagination.perPage,
                          n.pagination.page * n.pagination.perPage
                        )),
                      e.abrupt('return', { data: g, total: b['@graph'].length })
                    );
                  case 34:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )),
        function(e, t) {
          return c.apply(this, arguments);
        }),
      getOne:
        ((i = w(
          regeneratorRuntime.mark(function e(t, r) {
            var n, o;
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), s(r.id);
                  case 2:
                    return (n = e.sent), ((o = n.json).id = o.id || o['@id']), e.abrupt('return', { data: o });
                  case 6:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )),
        function(e, t) {
          return i.apply(this, arguments);
        }),
      getMany:
        ((a = w(
          regeneratorRuntime.mark(function e(t, r) {
            var n, o, a, i, c, u;
            return regeneratorRuntime.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = []), (o = x(r.ids)), (e.prev = 2), o.s();
                    case 4:
                      if ((a = o.n()).done) {
                        e.next = 15;
                        break;
                      }
                      return (i = 'object' === g((i = a.value)) ? i['@id'] : i), (e.next = 9), s(i);
                    case 9:
                      (c = e.sent), ((u = c.json).id = u.id || u['@id']), n.push(u);
                    case 13:
                      e.next = 4;
                      break;
                    case 15:
                      e.next = 20;
                      break;
                    case 17:
                      (e.prev = 17), (e.t0 = e.catch(2)), o.e(e.t0);
                    case 20:
                      return (e.prev = 20), o.f(), e.finish(20);
                    case 23:
                      return e.abrupt('return', { data: n });
                    case 24:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 17, 20, 23]]
            );
          })
        )),
        function(e, t) {
          return a.apply(this, arguments);
        }),
      getManyReference: function(e, t) {
        throw new Error('getManyReference is not implemented yet');
      },
      create:
        ((o = w(
          regeneratorRuntime.mark(function e(t, r) {
            var n, o, a, i, c;
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      l[t],
                      (e.next = 3),
                      s(l[t].containerUri, {
                        method: 'POST',
                        body: JSON.stringify(O({ '@context': T(f, p), '@type': l[t].types }, r.data))
                      })
                    );
                  case 3:
                    return (n = e.sent), (o = n.headers), (a = o.get('Location')), (e.next = 8), s(a);
                  case 8:
                    return (i = e.sent), ((c = i.json).id = c.id || c['@id']), e.abrupt('return', { data: c });
                  case 12:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )),
        function(e, t) {
          return o.apply(this, arguments);
        }),
      update:
        ((n = w(
          regeneratorRuntime.mark(function e(t, r) {
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), s(r.id, { method: 'PATCH', body: JSON.stringify(r.data) });
                  case 2:
                    return e.abrupt('return', { data: r.data });
                  case 3:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )),
        function(e, t) {
          return n.apply(this, arguments);
        }),
      updateMany: function(e, t) {
        throw new Error('updateMany is not implemented yet');
      },
      delete:
        ((r = w(
          regeneratorRuntime.mark(function e(t, r) {
            return regeneratorRuntime.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), s(r.id, { method: 'DELETE' });
                  case 2:
                    return e.abrupt('return', { data: { id: r.id } });
                  case 3:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )),
        function(e, t) {
          return r.apply(this, arguments);
        }),
      deleteMany: function(e, t) {
        throw new Error('deleteMany is not implemented yet');
      }
    };
  },
  L = function(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    switch ((t.headers || (t.headers = new Headers()), t.method)) {
      case 'POST':
      case 'PATCH':
        t.headers.set('Accept', 'application/ld+json'), t.headers.set('Content-Type', 'application/ld+json');
        break;
      case 'DELETE':
        break;
      case 'GET':
      default:
        t.headers.set('Accept', 'application/ld+json');
    }
    var n = localStorage.getItem('token');
    return t.headers.set('Authorization', 'Bearer '.concat(n)), r.fetchJson(e, t);
  },
  D = function(e) {
    var t = e.children,
      r = e.source,
      o = e.record,
      a = void 0 === o ? {} : o;
    if (1 !== h.Children.count(t)) throw new Error('<ActivitiesList> only accepts a single child');
    var i = n({ type: 'getList', resource: 'Activity', payload: { id: a[r] } }).data;
    if (!i) return null;
    var c = i.reduce(function(e, t) {
      return O(O({}, e), {}, E({}, t.id, t));
    }, {});
    return h.cloneElement(t, {
      resource: 'Activity',
      currentSort: { field: 'id', order: 'ASC' },
      data: c,
      ids: Object.keys(c),
      basePath: '/Activity'
    });
  },
  U = function(e) {
    var t = e.resource,
      r = e.id,
      n = e.source,
      c = e.basePath,
      u = a({ reference: t, id: r }).referenceRecord;
    return u
      ? h.createElement(o, { to: ''.concat(c, '/').concat(encodeURIComponent(r)) }, u[n])
      : h.createElement(i, null);
  },
  F = function(e) {
    var t = (function(e) {
        switch (e.type) {
          case 'Create':
            return {
              description: "A posté l'actualité",
              reference: { resource: 'Note', id: e.object.id, value: e.object.name, basePath: '/Note' }
            };
          case 'Follow':
            return {
              description: "A suivi l'action",
              reference: { resource: 'Project', id: e.object, source: 'name', basePath: '/Project' }
            };
          default:
            return { description: "Type d'action inconnu" };
        }
      })(e.record),
      r = t.description,
      n = t.reference;
    return h.createElement(
      'span',
      null,
      r,
      ' ',
      n.value
        ? h.createElement(o, { to: ''.concat(n.basePath, '/').concat(encodeURIComponent(n.id)) }, n.value)
        : h.createElement(U, n)
    );
  },
  M = function(e) {
    return h.createElement(
      c,
      e,
      h.createElement(u, { source: 'published', showTime: !0, label: 'Date' }),
      h.createElement(
        s,
        { basePath: '/Actor', reference: 'Actor', source: 'actor', label: 'Acteur' },
        h.createElement(l, { source: 'name' })
      ),
      h.createElement(F, { label: 'Description' })
    );
  },
  N = function(e) {
    var t = e.ids,
      r = e.children;
    if (1 !== h.Children.count(r)) throw new Error('<ActorsList> only accepts a single child');
    var n = f('Actor', t)
      .data.filter(function(e) {
        return e;
      })
      .reduce(function(e, t) {
        return O(O({}, e), {}, E({}, t.id, t));
      }, {});
    return h.cloneElement(r, {
      resource: 'Actor',
      currentSort: { field: 'id', order: 'ASC' },
      data: n,
      ids: Object.keys(n),
      basePath: '/Actor'
    });
  },
  H = function(e) {
    var t = e.children,
      r = e.source,
      o = e.record,
      a = n({ type: 'getOne', resource: 'Collection', payload: { id: o[r] } }).data;
    return a && a.items.length > 0 ? h.createElement(N, { ids: a.items }, t) : null;
  },
  q = function(e) {
    return h.createElement(
      c,
      P({ rowClick: 'show' }, e),
      h.createElement(l, { source: 'name', label: 'Nom' }),
      h.createElement(p, { basePath: '/Actor' })
    );
  },
  J = function(e) {
    return 'object' === g(e) && e['@value'] ? e['@value'] : e;
  },
  W = function(e) {
    return h.createElement(
      d,
      P({}, e, {
        format: function(t) {
          return t
            ? (Array.isArray(t) || (t = [t]),
              e.format && (t = e.format(t)),
              t.map(function(e) {
                return 'object' === g(e) ? e.id || e['@id'] : e;
              }))
            : t;
        }
      })
    );
  },
  X = function(e) {
    return h.createElement(
      m,
      P({}, e, {
        format: function(t) {
          return 'object' === g(t) && (t = t['@id']), e.format && (t = e.format(t)), t;
        }
      })
    );
  },
  z = function(e) {
    return h.createElement(
      y,
      P({}, e, {
        format: function(e) {
          if ((e = J(e))) return e.replace(' ', 'T');
        }
      })
    );
  },
  B = function(e) {
    return h.createElement('span', null, J(e.record[e.source]).replace('T', ' '));
  },
  G = function(e) {
    var t = e.source,
      r = e.record,
      n = void 0 === r ? {} : r;
    return h.createElement('span', null, J(n[t]));
  };
export {
  M as ActivitiesGrid,
  D as ActivitiesList,
  F as ActivityDescription,
  q as ActorsGrid,
  H as CollectionList,
  B as DateField,
  z as DateTimeInput,
  W as JsonLdReferenceInput,
  G as StringField,
  X as UriInput,
  b as authProvider,
  R as copyValues,
  C as dataProvider,
  L as httpClient
};
