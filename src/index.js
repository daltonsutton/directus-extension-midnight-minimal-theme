
import './style.css';

export default {
	id: 'midnight-minimal',
	name: 'Midnight Minimal',
	appearance: 'dark',
	rules: {
		'borderRadius': '12px',
		'borderWidth': '2px',

		'foreground': '#c9d1d9',
		'foregroundAccent': '#f0f6fc',
		'foregroundSubdued': '#525254',

		'background': '#09090B',
		'backgroundNormal': '#161616',
		'backgroundAccent': '#09090B',
		'backgroundSubdued': '#09090B',

		'borderColor': '#161616',
		'borderColorAccent': '#161616',
		'borderColorSubdued': '#161616',

		'primary': '#ffffff',
		'primaryBackground': 'color-mix(in srgb, var(--theme--background), var(--theme--primary) 10%)',
		'primarySubdued': 'color-mix(in srgb, var(--theme--background), var(--theme--primary) 50%)',
		'primaryAccent': 'color-mix(in srgb, var(--theme--primary), #16151a 25%)',

		'secondary': '#ff99dd',
		'secondaryBackground': 'color-mix(in srgb, var(--theme--background), var(--theme--secondary) 10%)',
		'secondarySubdued': 'color-mix(in srgb, var(--theme--background), var(--theme--secondary) 50%)',
		'secondaryAccent': 'color-mix(in srgb, var(--theme--secondary), #16151a 25%)',

		'success': '#2ecda7',
		'successBackground': 'color-mix(in srgb, var(--theme--background), var(--theme--success) 10%)',
		'successSubdued': 'color-mix(in srgb, var(--theme--background), var(--theme--success) 50%)',
		'successAccent': 'color-mix(in srgb, var(--theme--success), #16151a 25%)',

		'warning': '#ffa439',
		'warningBackground': 'color-mix(in srgb, var(--theme--background), var(--theme--warning) 10%)',
		'warningSubdued': 'color-mix(in srgb, var(--theme--background), var(--theme--warning) 50%)',
		'warningAccent': 'color-mix(in srgb, var(--theme--warning), #16151a 25%)',

		'danger': '#e35169',
		'dangerBackground': 'color-mix(in srgb, var(--theme--background), var(--theme--danger) 10%)',
		'dangerSubdued': 'color-mix(in srgb, var(--theme--background), var(--theme--danger) 50%)',
		'dangerAccent': 'color-mix(in srgb, var(--theme--danger), #16151a 25%)',

		'fonts': {
			'display': {
				'fontFamily': '\'Inter\', system-ui',
				'fontWeight': '700'
			},
			'sans': {
				'fontFamily': '\'Inter\', system-ui',
				'fontWeight': '500'
			},
			'serif': {
				'fontFamily': '\'Merriweather\', serif',
				'fontWeight': '500'
			},
			'monospace': {
				'fontFamily': '\'Fira Mono\', monospace',
				'fontWeight': '500'
			}
		},

		'navigation': {
			'background': '#09090B',
			'backgroundAccent': '#09090B',

			'borderColor': '#161616',
			'borderWidth': '1px',

			'project': {
				'borderColor': 'transparent',
				'borderWidth': '0px',
				'background': '#161616',
				'foreground': 'var(--theme--foreground-accent)',
				'fontFamily': 'var(--theme--fonts--sans--font-family)'
			},

			'modules': {
				'background': 'var(--theme--background)',
				'borderColor': '#161616',
				'borderWidth': '1px',

				'button': {
					'foreground': 'var(--theme--foreground-subdued)',
					'foregroundHover': '#fff',
					'foregroundActive': 'var(--theme--foreground-accent)',

					'background': 'transparent',
					'backgroundHover': 'transparent',
					'backgroundActive': '#161616'
				}
			},

			'list': {
				'icon': {
					'foreground': 'var(--theme--primary)',
					'foregroundHover': 'var(--theme--navigation--list--icon--foreground)',
					'foregroundActive': 'var(--theme--navigation--list--icon--foreground)'
				},

				'foreground': 'var(--theme--foreground-accent)',
				'foregroundHover': 'var(--theme--navigation--list--foreground)',
				'foregroundActive': 'var(--theme--navigation--list--foreground)',

				'background': 'transparent',
				'backgroundHover': '#161616',
				'backgroundActive': '#161616',

				'fontFamily': 'var(--theme--fonts--sans--font-family)',

				'divider': {
					'borderColor': '#161616',
					'borderWidth': 'var(--theme--border-width)'
				}
			}
		},

		'header': {
			'background': 'var(--theme--background)',
			'borderColor': '#161616',
			'borderWidth': '1px',
			'boxShadow': '0 4px 7px -4px rgb(var(--black) / 0.2)',
			'headline': {
				'foreground': 'var(--theme--foreground-subdued)',
				'fontFamily': 'var(--theme--fonts--sans--font-family)'
			},
			'title': {
				'foreground': 'var(--theme--foreground-accent)',
				'fontFamily': 'var(--theme--fonts--display--font-family)',
				'fontWeight': 'var(--theme--fonts--display--font-weight)'
			}
		},

		'form': {
			'columnGap': '32px',
			'rowGap': '40px',

			'field': {
				'label': {
					'foreground': 'var(--theme--foreground-accent)',
					'fontFamily': 'var(--theme--fonts--sans--font-family)',
					'fontWeight': '600'
				},
				'input': {
					'background': 'var(--theme--background)',
					'backgroundSubdued': 'var(--theme--background-subdued)',

					'foreground': 'var(--theme--foreground)',
					'foregroundSubdued': 'var(--theme--foreground-subdued)',

					'borderColor': '#161616',
					'borderColorHover': '#303030',
					'borderColorFocus': 'var(--theme--primary)',

					'boxShadow': 'none',
					'boxShadowHover': 'none',
					'boxShadowFocus': '0 0 16px -8px var(--theme--primary)',

					'height': '60px',
					'padding': '16px'
				}
			}
		},

		'sidebar': {
			'background': '#09090B',
			'foreground': 'var(--theme--foreground-subdued)',
			'fontFamily': 'var(--theme--fonts--sans--font-family)',
			'borderColor': '#161616',
			'borderWidth': '1px',

			'section': {
				'toggle': {
					'icon': {
						'foreground': 'var(--theme--foreground-accent)',
						'foregroundHover': 'var(--theme--sidebar--section--toggle--icon--foreground)',
						'foregroundActive': 'var(--theme--sidebar--section--toggle--icon--foreground)'
					},

					'foreground': 'var(--theme--foreground-accent)',
					'foregroundHover': 'var(--theme--sidebar--section--toggle--foreground)',
					'foregroundActive': 'var(--theme--sidebar--section--toggle--foreground)',

					'background': '#161616',
					'backgroundHover': 'var(--theme--sidebar--section--toggle--background)',
					'backgroundActive': 'var(--theme--sidebar--section--toggle--background)',

					'fontFamily': 'var(--theme--fonts--sans--font-family)',

					'borderColor': 'transparent',
					'borderWidth': '0px'
				},

				'form': {
					'columnGap': 'var(--theme--form--column-gap)',
					'rowGap': 'var(--theme--form--row-gap)',

					'label': {
						'foreground': 'var(--theme--form--field--label--foreground)',
						'fontFamily': 'var(--theme--form--field--label--font-family)'
					},

					'field': {
						'input': {
							'background': 'var(--theme--form--field--input--background)',
							'foreground': 'var(--theme--form--field--input--foreground)',
							'foregroundSubdued': 'var(--theme--form--field--input--foreground-subdued)',

							'borderColor': 'var(--theme--form--field--input--border-color)',
							'borderColorHover': 'var(--theme--form--field--input--border-color-hover)',
							'borderColorFocus': 'var(--theme--form--field--input--border-color-focus)',

							'boxShadow': 'var(--theme--form--field--input--box-shadow)',
							'boxShadowHover': 'var(--theme--form--field--input--box-shadow-hover)',
							'boxShadowFocus': 'var(--theme--form--field--input--box-shadow-focus)',

							'height': '52px',
							'padding': '12px'
						}
					}
				}
			}
		},

		'public': {
			'background': 'var(--theme--background)',
			'foreground': 'var(--theme--foreground)',
			'foregroundAccent': 'var(--theme--foreground-accent)',

			'art': {
				'background': '#161616',
				'primary': '#000000',
				'secondary': '#161616',
				'speed': '1'
			},

			'form': {
				'columnGap': 'var(--theme--form--column-gap)',
				'rowGap': 'var(--theme--form--row-gap)',

				'field': {
					'label': {
						'foreground': 'var(--theme--form--field--label--foreground)',
						'fontFamily': 'var(--theme--form--field--label--font-family)'
					},

					'input': {
						'background': 'var(--theme--form--field--input--background)',
						'foreground': 'var(--theme--form--field--input--foreground)',
						'foregroundSubdued': 'var(--theme--form--field--input--foreground-subdued)',

						'borderColor': 'var(--theme--form--field--input--border-color)',
						'borderColorHover': 'var(--theme--form--field--input--border-color-hover)',
						'borderColorFocus': 'var(--theme--form--field--input--border-color-focus)',

						'boxShadow': 'var(--theme--form--field--input--box-shadow)',
						'boxShadowHover': 'var(--theme--form--field--input--box-shadow-hover)',
						'boxShadowFocus': 'var(--theme--form--field--input--box-shadow-focus)',

						'height': 'var(--theme--form--field--input--height)',
						'padding': 'var(--theme--form--field--input--padding)'
					}
				}
			}
		},

		'popover': {
			'menu': {
				'background': '#121212',
				'borderRadius': 'var(--theme--border-radius)',
				'boxShadow': '0px 0px 6px 0px rgb(0, 0, 0, 0.2)'
			}
		},

		'banner': {
			'background': '#09090B',
			'padding': '40px',
			'borderRadius': 'var(--theme--border-radius)',

			'avatar': {
				'borderRadius': 'var(--theme--border-radius)',
				'foreground': 'var(--theme--primary)',
				'background': '#161616'
			},

			'headline': {
				'foreground': '#ffffff',
				'fontFamily': 'var(--theme--fonts--sans--font-family)',
				'fontWeight': 'var(--theme--fonts--sans--font-weight)'
			},

			'title': {
				'foreground': '#ffffff',
				'fontFamily': 'var(--theme--fonts--display--font-family)',
				'fontWeight': 'var(--theme--fonts--display--font-weight)'
			},

			'subtitle': {
				'foreground': '#525254',
				'fontFamily': 'var(--theme--fonts--monospace--font-family)',
				'fontWeight': 'var(--theme--fonts--monospace--font-weight)'
			},

			'art': {
				'foreground': '#161616'
			}
		}
	}
};
