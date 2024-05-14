

const models = await fetch('https://api.fakeyou.com/tts/inference', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			tts_model_token: 'weight_dh8zry5bgkfm0z6nv3anqa9y5',
			uuid_idempotency_token: 'kljsadf9u234lkjsdflksdjf',
			inference_text: "I'll only say the things you want me to say, and nothing more.",
		})
	}).then(res => res.json());

	{
		"model_token": "weight_dh8zry5bgkfm0z6nv3anqa9y5",
		"tts_model_type": "tacotron2",
		"creator_user_token": "U:F6S52625WQ8C2",
		"creator_username": "jacoblenstar",
		"creator_display_name": "JacobLenstar",
		"creator_gravatar_hash": "9bbbbd026ba9526a6f44bcdf0c389b6b",
		"title": "Pokedex (Pokemon, 4Kids)",
		"ietf_language_tag": "en",
		"ietf_primary_language_subtag": "en",
		"is_front_page_featured": false,
		"is_twitch_featured": false,
		"maybe_suggested_unique_bot_command": null,
		"creator_set_visibility": "public",
		"user_ratings": {
			"positive_count": 0,
			"negative_count": 0,
			"total_count": 0
		},
		"category_tokens": [],
		"created_at": "2022-06-30T14:15:06Z",
		"updated_at": "2024-01-22T22:41:28Z"
	},

	,"inference_job_token":"jinf_3sw02e1c9zz73djhjceapmerbwx"


	const models = await fetch('https://api.fakeyou.com/tts/job/jinf_3sw02e1c9zz73djhjceapmerbwx', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(res => res.json());



	{
		"success": true,
		"models": {
			"success": true,
			"state": {
				"job_token": "jinf_3sw02e1c9zz73djhjceapmerbwx",
				"status": "complete_success",
				"maybe_extra_status_description": null,
				"attempt_count": 1,
				"maybe_result_token": "m_7zd1bk0qfe830m18c8mzq6ket3rggw",
				"maybe_public_bucket_wav_audio_path": "/media/c/g/h/r/0/cghr0qe9ryahfp7kezpxn8n9fctcvynd/fakeyou_cghr0qe9ryahfp7kezpxn8n9fctcvynd.wav",
				"model_token": "weight_dh8zry5bgkfm0z6nv3anqa9y5",
				"tts_model_type": "tacotron2",
				"title": "Pokedex (Pokemon, 4Kids)",
				"raw_inference_text": "I'll only say the things you want me to say, and nothing more.",
				"created_at": "2024-04-13T07:05:17Z",
				"updated_at": "2024-04-13T07:05:24Z"
			}
		}
	}

	https://storage.googleapis.com/vocodes-public/

	"maybe_public_bucket_wav_audio_path": "/media/c/g/h/r/0/cghr0qe9ryahfp7kezpxn8n9fctcvynd/fakeyou_cghr0qe9ryahfp7kezpxn8n9fctcvynd.wav",

	https://storage.googleapis.com/vocodes-public/media/c/g/h/r/0/cghr0qe9ryahfp7kezpxn8n9fctcvynd/fakeyou_cghr0qe9ryahfp7kezpxn8n9fctcvynd.wav
