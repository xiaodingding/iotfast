
function fib(n)
    if n == 0 then
        return 0
    elseif n == 1 then
        return 1
    end
    return fib(n-1) + fib(n-2)
end

function fibt(n)
    return fibc(n, 0, 1)
end

function fibc(n, a, b)
    if n == 0 then
        return a
    else
        if n == 1 then return b end
    end
    return fibc(n-1, b, a+b)
end

function test_args(n)
    res, err = sync_extern_method('test_sum', 1,2,3,4,5,6,n[1],n[2])
    if err == nil then
        return res
    else
        error(err)
    end
end

function test_pull_table(obj)
    return {a=true, b=123, c='hello luajit', d={e=12, f='good golang'}, e={1,2,3,4,4}, 1, m=obj}, nil
end

function async_json_encode()
    return coroutine.yield('json_decode', '{"a":"ads","b":12,"c":"sadh"}', 'hello world')
end
