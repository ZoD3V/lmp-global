<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Under Maintenance — lmp-global.com</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: #0f172a;
            color: #e2e8f0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .card {
            background: #1e293b;
            border-radius: 24px;
            padding: 64px 48px;
            width: 90%;
            max-width: 520px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 10px 30px -4px rgba(0, 0, 0, 0.4);
            text-align: center;
        }

        .icon {
            width: 120px;
            height: 120px;
            margin: 0 auto 24px;
            background: rgba(99, 102, 241, 0.15);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .icon img {
            max-width: 80%;
            max-height: 80%;
        }

        h1 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 12px;
        }

        p {
            font-size: 15px;
            line-height: 1.7;
            color: #94a3b8;
            margin-bottom: 32px;
        }

        .loader {
            display: flex;
            justify-content: center;
            gap: 6px;
            margin-bottom: 32px;
        }

        .loader span {
            display: block;
            width: 10px;
            height: 10px;
            background: #6366f1;
            border-radius: 50%;
            animation: pulse 1.2s ease-in-out infinite;
        }

        .loader span:nth-child(2) {
            animation-delay: 0.15s;
        }

        .loader span:nth-child(3) {
            animation-delay: 0.3s;
        }

        @keyframes pulse {
            0%,
            80%,
            100% {
                transform: scale(0.6);
                opacity: 0.4;
            }
            40% {
                transform: scale(1);
                opacity: 1;
            }
        }

        .footer {
            font-size: 13px;
            color: #475569;
        }

        @media (max-width: 480px) {
            .card {
                padding: 40px 24px;
            }

            h1 {
                font-size: 20px;
            }
        }
    </style>
</head>

<body>

    <div class="card">

        <div class="icon">
            <img src="/images/lmp-tab.png" alt="LMP Global Logo">
        </div>

        <h1>We'll be back soon</h1>

        <p>
            We're performing scheduled maintenance to improve your experience.
            Please check back in a little while.
        </p>

        <div class="loader">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div class="footer">
            &copy; {{ date('Y') }} lmp-global.com
        </div>

    </div>

</body>
</html>
