<?php
namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller as BaseController;
use App\Models\User;

class UserController extends BaseController
{
    private $limit = 7;

    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(Request $request)
    {
        $limit = $request->input('limit') ?: $this->limit;

        return User::select('user.*')
                ->paginate($limit);
    }

    /**
     * @param $id
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function show($id)
    {
        return User::find($id);
    }

    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Exception
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email',
            'password' => 'required',
            'password_confirmation' => 'required|same:password'
        ]);

        $count = User::where('email', $request->input('email'))
            ->count();

        if ($count > 0) {
            return response()->json([
                'email' => '이미 가입되어있는 이메일 주소입니다.'
            ], 409);
        }

        $user = new User();
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = bcrypt($request->input('password'));
        $user->save();

        return response()->json($user);
    }

    /**
     * @param Request $request
     * @param $id
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);

        if (is_null($user)) {
            return abort(404);
        }

        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->save();

        return response()->json($user);
    }

    /**
     * @param $id
     */
    public function delete($id)
    {
        $user = User::find($id);

        if (is_null($user)) {
            return abort(404);
        }

        $user->delete();
    }
}